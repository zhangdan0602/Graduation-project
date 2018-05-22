﻿/*
*	全国三级城市联动 js版
*/
function Dsy(){
	this.Items = {};
}
Dsy.prototype.add = function(id,iArray){
	this.Items[id] = iArray;
}
Dsy.prototype.Exists = function(id){
	if(typeof(this.Items[id]) == "undefined") return false;
	return true;
}

function change(v){
	var str="0";
	for(i=0;i<v;i++){
		str+=("_"+(document.getElementById(s[i]).selectedIndex-1));
	};
	var ss=document.getElementById(s[v]);
	with(ss){
		length = 0;
		options[0]=new Option(opt0[v],opt0[v]);
		if(v && document.getElementById(s[v-1]).selectedIndex>0 || !v){
			if(dsy.Exists(str)){
				ar = dsy.Items[str];
				for(i=0;i<ar.length;i++){
					options[length]=new Option(ar[i],ar[i]);
				}//end for
				if(v){ options[0].selected = true; }
			}
		}//end if v
		if(++v<s.length){change(v);}
	}//End with
}

var dsy = new Dsy();

dsy.add("0",["机电工程学院","机械工程学院","材料科学与工程学院","化学工程与技术学院","信息与通信工程学院","仪器与电子学院","大数据学院","理学院","经济与管理学院","人文社会科学学院","体育学院","艺术学院","软件学院","环境与安全工程学院","电气与控制学院","能源与动力工程学院"]);
dsy.add("0_0_0",["N1院实验14"]);
dsy.add("0_0_1",["14010Z01"]);
dsy.add("0_0_2",["14010641","14010642","14010643"]);
dsy.add("0_0_3",["14010541","14010542"]);
dsy.add("0_0_4",["14010441","14010442"]);
dsy.add("0_0_5",["14010341","14010342"]);
dsy.add("0_0_6",["14010741","14010742"]);
dsy.add("0_0_7",["14010241","14010242"]);
dsy.add("0_0_8",["14010141"]);
dsy.add("0_0",["N一院实验班","一院卓越工程师","弹药工程与爆炸技术(2013)","探测制导与控制技术(2013)","武器发射工程(2013)","武器系统与工程(2013)","装甲车辆工程(2013)","飞行器制造工程(2013)","飞行器设计与工程(2013)"]);
dsy.add("0_1_0",["N2院实验14"]);
dsy.add("0_1_1",["14020941","14020942"]);
dsy.add("0_1_2",["14021041"]);
dsy.add("0_1_3",["14020441"]);
dsy.add("0_1_4",["14020141","14020141"]);
dsy.add("0_1_5",["14020341","14020342","14020343"]);
dsy.add("0_1_6",["14020241","14020242","14020243"]);
dsy.add("0_1_7",["14020541","14020542","14020543"]);
dsy.add("0_1",["N二院实验班","包装工程(2013)","工业工程(2013)","工业设计(2013)","机械工程(2013)","机械电子工程(2013)","机械设计制造及其自动化(2013)","过程装备与控制工程(2013)"]);
dsy.add("0_2_0",["N3院实验14"]);
dsy.add("0_2_1",["14030541","14030542"]);
dsy.add("0_2_2",["14030341","14030342"]);
dsy.add("0_2_3",["14030Z01"]);
dsy.add("0_2_4",["14030141","14030142","14030143"]);
dsy.add("0_2_5",["14030241","14030242"]);
dsy.add("0_2_6",["14030441","14030442","14030443"]);
dsy.add("0_2",["N三院实验班","复合材料与工程(2013)","无机非金属材料工程(2013)","材料卓越工程师","材料成型及控制工程(2013)","金属材料工程(2013)","高分子材料与工程(2013)"]);
dsy.add("0_3_0",["N4院实验14"]);
dsy.add("0_3_1",["14040241","14040242"]);
dsy.add("0_3_2",["14040141","14040142","14040143"]);
dsy.add("0_3_3",["14040Z01"]);
dsy.add("0_3_4",["14040641","14040642","14040643"]);
dsy.add("0_3",["N四院实验班","制药工程(2013)","化学工程与工艺(2013)","特能卓越工程师","生物工程(2013)"]);
dsy.add("0_4_0",["N5院实验14"]);
dsy.add("0_4_1",["14050541","14050542"]);
dsy.add("0_4_2",["14050741"]);
dsy.add("0_4_3",["14050341","14050342","14050343"]);
dsy.add("0_4_4",["14050641"]);
dsy.add("0_4_5",["14050141","14050142","14050143"]);
dsy.add("0_4_6",["14050441","14050442"]);
dsy.add("0_4_7",["14050Z01"]);
dsy.add("0_4_8",["14050241","14050242","14050243"]);
dsy.add("0_4",["N五院实验班","信息对抗技术(2013)","信息工程(2013)","光电信息科学与工程(2013)","生物医学工程(2013)","电子信息工程(2013)","电子信息科学与技术(2013)","通信卓越工程师","通信工程(2013)"]);
dsy.add("0_5_0",["N6院实验14"]);
dsy.add("0_5_1",["14060241","14060242","14060243"]);
dsy.add("0_5",["六院实验班","电子科学与技术1"]);
dsy.add("0_6_0",["N7院实验14"]);
dsy.add("0_6_1",["14070941","14070942","14070943"]);
dsy.add("0_6_2",["14070841","14070842"]);
dsy.add("0_6_3",["14070641","14070642"]);
dsy.add("0_6",["N七院实验班","物联网工程(2013)","网络工程(2013)","计算机科学与技术(2013)"]);
dsy.add("0_7_0",["N8院实验14"]);
dsy.add("0_7_1",["14080241","14080242"]);
dsy.add("0_7_2",["14080841","14080842"]);
dsy.add("0_7_3",["14080741","14080742"]);
dsy.add("0_7_4",["14080541","14080542"]);
dsy.add("0_7_5",["14080941","14080942"]);
dsy.add("0_7_6",["14080441"]);
dsy.add("0_7_7",["14080141"]);
dsy.add("0_7_8",["14080341"]);
dsy.add("0_7_9",["14080641"]);
dsy.add("0_7",["N八院实验班","信息与计算科学(2013)","土木工程(2013)","工程力学(2013)","应用化学(2013)","应用物理学(2013)","应用统计学(2013)","数学与应用数学(2013)","物理学(2013)","统计学(2013)"]);
dsy.add("0_8_0",["14090441"]);
dsy.add("0_8_1",["14090341","14090342"]);
dsy.add("0_8_2",["14090541"]);
dsy.add("0_8_3",["14090641","14090642"]);
dsy.add("0_8_4",["14090141"]);
dsy.add("0_8_5",["14090241"]);
dsy.add("0_8_6",["14090741","14090742"]);
dsy.add("0_8",["信息管理与信息系统(2013)","国际经济与贸易(2013)","工商管理(2013)","市场营销(2013)","经济学(2013)","经济统计学(2013)","财务管理(2013)"]);
dsy.add("0_9_0",["14100541","14100542"]);
dsy.add("0_9_1",["14100241"]);
dsy.add("0_9_2",["14100341"]);
dsy.add("0_9_3",["14100141"]);
dsy.add("0_9_4",["14100441","14100442","14100443"]);
dsy.add("0_9",["广播电视学(2013)","政治学与行政学(2013)","汉语言文学(2013)","法学(2013)","英语(2013)"]);
dsy.add("0_10_0",["14110241"]);
dsy.add("0_10_1",["14110141","14110142"]);
dsy.add("0_10",["社会体育指导与管理(2013)","运动训练(2013)"]);
dsy.add("0_11_0",["14120541","14120542"]);
dsy.add("0_11_1",["14120341","14120342"]);
dsy.add("0_11_2",["14120241","14120241"]);
dsy.add("0_11_3",["14120141","14120141"]);
dsy.add("0_11",["产品设计(2013)","视觉传达设计(2013)","音乐学(2013)","音乐表演(2013)"]);
dsy.add("0_12_0",["14140A01","14140A02","14140A03","14140A04","14140A05"]);
dsy.add("0_12_1",["14140B01"]);
dsy.add("0_12_2",["14140T01"]);
dsy.add("0_12_3",["14140X01","14140X02","14140X03","14140X04","14140X05","14140X06"]);
dsy.add("0_12_4",["14140Y01","14140Y02","14140Y03","14140Y04"]);
dsy.add("0_12_5",["14140Z01"]);
dsy.add("0_12",["软件工程(软件开发与测试)","软件工程(企业信息化软件开发与应用)","软件工程（电子商务与现代物流软件开发与应用）","软件工程（移动互联网软件开发与应用）","软件工程（云计算与大数据分析）","软件工程（智慧城市建设应用软件开发与测试）"]);
dsy.add("0_13_0",["14040541","14040542","14040543"]);
dsy.add("0_13_1",["14040341","14040342","14040343"]);
dsy.add("0_13_2",["14040441","14040442"]);
dsy.add("0_13",["安全工程","特种能源技术与工程","环境工程"]);
dsy.add("0_14_0",[]);
dsy.add("0_14",["电气与控制学院"]);
dsy.add("0_15_0",[]);
dsy.add("0_15",["能源与动力工程学院"]);
dsy.add("0",["机电工程学院","机械工程学院","材料科学与工程学院","化学工程与技术学院","信息与通信工程学院","仪器与电子学院","大数据学院","理学院","经济与管理学院","人文社会科学学院","体育学院","艺术学院","软件学院","环境与安全工程学院","电气与控制学院","能源与动力工程学院"]);

var s=["s_province","s_city","s_county"];//三个select的name
var opt0 = ["请选择学院","请选择专业","请选择班级"];//初始值
function _init_area(){  //初始化函数
	for(i=0;i<s.length-1;i++){
	  document.getElementById(s[i]).onchange=new Function("change("+(i+1)+")");
	}
	change(0);
}
