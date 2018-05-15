package nuc.sw.zd.card.service.provider;

import nuc.sw.zd.card.dao.BaseDao;
import nuc.sw.zd.card.dao.bill.BillDao;
import nuc.sw.zd.card.dao.bill.BillDaoImpl;
import nuc.sw.zd.card.dao.provider.ProviderDao;
import nuc.sw.zd.card.dao.provider.ProviderDaoImpl;
import nuc.sw.zd.card.pojo.Provider;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

public class ProviderServiceImpl implements ProviderService {

    private ProviderDao providerDao;
    private BillDao billDao;
    public ProviderServiceImpl() {
        providerDao = new ProviderDaoImpl();
        billDao = new BillDaoImpl();
    }

    @Override
    public boolean add(Provider provider) {
        boolean flag = false;
        Connection connection = null;
        try {
            connection = BaseDao.getConnection();
            connection.setAutoCommit(false);  // 开启JDBC事务管理
            if (providerDao.add(connection, provider) > 0) {
                flag = true;
            }
            connection.commit();
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            BaseDao.closeResource(connection, null, null);
        }
        return flag;
    }

    @Override
    public List<Provider> getProviderList(String proName, String proCode) {
        Connection connection = null;
        List<Provider> providerList = null;
        try {
            connection = BaseDao.getConnection();
            providerList = providerDao.getProviderList(connection, proName, proCode);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            BaseDao.closeResource(connection, null, null);
        }
        return providerList;
    }

    /**
     *   业务: 根据ID删除供应商表的数据之前, 需要先去订单表里进行查询操作.
     *   若订单表中无功该供应商的订单数据, 则可以删除.
     *   若有该供应商的订单数据, 则不可以删除.
     *   返回值billCount
     *    1> billCount == 0  删除 -- 1成功(0) 2不成功(-1)
     *    2> billCount > 0   不能删除  查询成功(0) 查询不成功(-1)
     *
     *    判断:
     *       如果billCount = -1 失败
     *       若billCount >= 0 成功
     */
    @Override
    public int deleteProviderById(String delId) {
        Connection connection = null;
        int billCount = -1;
        try {
            connection = BaseDao.getConnection();
            connection.setAutoCommit(false);
            billCount = billDao.getBillCountByProviderId(connection, delId);
            if (billCount == 0) {
                providerDao.deleteProviderById(connection, delId);
            }
            connection.commit();
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            BaseDao.closeResource(connection, null, null);
        }
        return billCount;
    }

    @Override
    public Provider getProviderById(String id) {
        Connection connection = null;
        Provider provider = null;
        try {
            connection = BaseDao.getConnection();
            provider = providerDao.getProviderById(connection, id);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            BaseDao.closeResource(connection, null, null);
        }
        return provider;
    }

    @Override
    public boolean modify(Provider provider) {
        Connection connection = BaseDao.getConnection();
        boolean flag = false;
        try {
            if (providerDao.modify(connection, provider) > 0) {
                flag = true;
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            BaseDao.closeResource(connection, null, null);
        }
        return flag;
    }
}