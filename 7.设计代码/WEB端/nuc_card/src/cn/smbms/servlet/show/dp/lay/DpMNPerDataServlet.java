package cn.smbms.servlet.show.dp.lay;

import cn.smbms.pojo.PieEntity;
import com.alibaba.fastjson.JSON;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@WebServlet("/major_num_per")
public class DpMNPerDataServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("123");
        response.setContentType("text/html;charset=utf‐8");
        /** 链接数据库 */
        String driver= "com.mysql.jdbc.Driver";
        String url= "jdbc:mysql://localhost:3306/nuc_card?zeroDateTimeBehavior=convertToNull&characterEncoding=utf8";
        String user= "root";
        String password = "";
        Connection conn = null;
        try {
            Class.forName(driver);
            conn = DriverManager.getConnection(url, user, password);
        } catch (SQLException e) {
            System.err.println(e.getMessage());
        } catch (ClassNotFoundException e) {
            System.err.println(e.getMessage());
        }
        String school = (String) request.getSession().getAttribute("school");
        System.out.println(school);
        String major = (String) request.getSession().getAttribute("major");
        System.out.println(major);
        String num = (String) request.getSession().getAttribute("num");
        System.out.println(num);
        /*** 获得数据 */

        String sql = "select outid,acccode,sum(OPFARE_sum) opfare,dpname1,dpname2,dpname4 \n" +
                "from tb_n_attend_consume where dpname1='"+school+"' and dpname2 ='"+major+"' and dpname4 ='" +num +
                "' group by OUTID,acccode,dpname1,dpname2,dpname4 order by opfare ;";
        ResultSet set = null;
        Statement stmt = null;
        List<PieEntity> list = new ArrayList<PieEntity>();
        try {
            stmt = conn.createStatement();
            set = stmt.executeQuery(sql);
            while (set.next()) {
                PieEntity bean = new PieEntity();
                bean.setOutid(set.getString("outid"));
                bean.setAcccode(set.getInt("acccode"));
                bean.setOpfare(set.getFloat("opfare"));
                bean.setDpname1(set.getString("dpname1"));
                bean.setDpname2(set.getString("dpname2"));
                bean.setDpname4(set.getString("dpname4"));

                list.add(bean);
            }
        } catch (SQLException e) {
            System.err.println(e.getMessage());
        }
        String jsonString = JSON.toJSONString(list);
        System.err.println(jsonString);
        PrintWriter out = response.getWriter();
        out.print(jsonString);
        //System.out.println(list.toString());
        out.flush();
        out.close();
    }
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }
}
