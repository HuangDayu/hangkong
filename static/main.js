// ==========================================
// 1. Data Configuration
// ==========================================

// Student List
const STUDENTS = [
    {"学号": "1001", "姓名": "李承泽"}, {"学号": "1002", "姓名": "梁淏竣"}, {"学号": "1003", "姓名": "梁智杰"},
    {"学号": "1004", "姓名": "莫与安"}, {"学号": "1005", "姓名": "龙翔云"}, {"学号": "1006", "姓名": "冯允初"},
    {"学号": "1007", "姓名": "冯钧禹"}, {"学号": "1008", "姓名": "麦海皓"}, {"学号": "1009", "姓名": "邓熙睿"},
    {"学号": "1010", "姓名": "朱俊宇"}, {"学号": "1011", "姓名": "陈承言"}, {"学号": "1012", "姓名": "冯修远"},
    {"学号": "1013", "姓名": "王  腾"}, {"学号": "1014", "姓名": "林  煦"}, {"学号": "1015", "姓名": "梁淏然"},
    {"学号": "1016", "姓名": "方浩宸"}, {"学号": "1017", "姓名": "陈俊霖"}, {"学号": "1018", "姓名": "唐逸凡"},
    {"学号": "1019", "姓名": "许康泽"}
];

// Question Bank (120 Questions)
const QUESTIONS = [
    {
        "id": 1,
        "type": "choice",
        "text": "中国人首次自行设计、制造并成功试飞的第一架飞机叫什么名字？",
        "options": ["莱特一号", "飞行者一号", "冯如一号", "福特一号"],
        "answer": 2
    },
    {
        "id": 2,
        "type": "choice",
        "text": "神经元无人机是由哪个大洲的多国联合研制的？",
        "options": ["美洲", "欧洲", "非洲", "亚洲"],
        "answer": 1
    },
    {
        "id": 3,
        "type": "choice",
        "text": "无人机在电力巡检领域的核心应用目的是？",
        "options": ["飞行练习操作", "无人机飞行表演", "检查线路安全", "无人机教学"],
        "answer": 2
    },
    {
        "id": 4,
        "type": "choice",
        "text": "根据我国无人驾驶航空器管理相关法规，视距内飞行是指无人机在驾驶员目视视距内，水平半径不超过（ ）米的飞行活动？",
        "options": ["800", "1000", "2000", "500"],
        "answer": 3
    },
    {
        "id": 5,
        "type": "choice",
        "text": "下列选项中，专门针对无人驾驶航空器管理制定的全国性法规是？",
        "options": ["《无人驾驶航空器飞行管理暂行条例》", "《中华人民共和国环境保护法》", "《中华人民共和国治安管理处罚法》", "《中华人民共和国道路交通安全法》"],
        "answer": 0
    },
    {
        "id": 6,
        "type": "choice",
        "text": "如果把鸟儿类比无人机，鸟儿的翅膀对应无人机的机翼，那么鸟儿的大脑相当于无人机的（ ）？",
        "options": ["飞行平台", "发动机", "飞行控制系统", "机翼"],
        "answer": 2
    },
    {
        "id": 7,
        "type": "choice",
        "text": "莱特兄弟发明的飞行者一号，整机采用的气动布局是？",
        "options": ["鸭式双翼布局", "上单翼布局", "下单翼布局", "三角翼布局"],
        "answer": 0
    },
    {
        "id": 8,
        "type": "choice",
        "text": "我国歼 15 舰载战斗机的官方绰号是？",
        "options": ["飞虎", "飞鲨", "飞龙", "飞鼠"],
        "answer": 1
    },
    {
        "id": 9,
        "type": "choice",
        "text": "空中客车 A380 因超大载客量与机身尺寸，被广泛称为？",
        "options": ["空中巨无霸", "空中汉堡包", "空中飞人", "空中城堡"],
        "answer": 0
    },
    {
        "id": 10,
        "type": "choice",
        "text": "无人机的基本通信系统，由信源、发信机、信道和以下哪两个核心部分构成？",
        "options": ["收信机和信宿", "信机和接收机", "信宿和发信机", "通信机和发信机"],
        "answer": 0
    },
    {
        "id": 11,
        "type": "choice",
        "text": "旋翼无人机相对于固定翼无人机，最核心的优势是？",
        "options": ["安全性高", "续航时间长", "驾驶难度低", "可垂直起降与悬停"],
        "answer": 3
    },
    {
        "id": 12,
        "type": "choice",
        "text": "通过先进制备技术，将两种及以上不同性质的材料组分优化组合而成的新材料是？",
        "options": ["复合材料", "有机高分子材料", "无机高分子材料", "金属材料"],
        "answer": 0
    },
    {
        "id": 13,
        "type": "choice",
        "text": "无人机下列传输链路中，属于双向数据传输的是？",
        "options": ["数传链路", "图传链路", "影像传输", "以上都可"],
        "answer": 0
    },
    {
        "id": 14,
        "type": "choice",
        "text": "下列传统玩具中，其工作原理被公认为现代燃气涡轮机械（航空喷气发动机核心部件）雏形的是？",
        "options": ["风筝", "孔明灯", "走马灯", "竹蜻蜓"],
        "answer": 2
    },
    {
        "id": 15,
        "type": "choice",
        "text": "平直机翼的常见类型包括矩形翼、椭圆翼和以下哪种？",
        "options": ["梯形翼", "三角翼", "后掠翼", "前掠翼"],
        "answer": 0
    },
    {
        "id": 16,
        "type": "choice",
        "text": "与陀螺仪配合，用于修正无人机航向漂移的核心传感器是？",
        "options": ["气压计", "电子罗盘", "加速度计", "湿度计"],
        "answer": 1
    },
    {
        "id": 17,
        "type": "choice",
        "text": "以下属于教育无人机核心应用场景的是？",
        "options": ["课堂教学", "电影拍摄", "物流运输", "应急救援"],
        "answer": 0
    },
    {
        "id": 18,
        "type": "choice",
        "text": "下列哪一项是植保无人机的核心功能？",
        "options": ["作物喷洒", "地块测绘", "航拍取景", "喊话播报"],
        "answer": 0
    },
    {
        "id": 19,
        "type": "choice",
        "text": "无人机在高压电塔及输电线路附近违规飞行，最直接的核心后果是？",
        "options": ["影响输电系统安全稳定运行", "造成环境污染", "引发人员安全事故", "影响道路车辆通行"],
        "answer": 0
    },
    {
        "id": 20,
        "type": "choice",
        "text": "无人机遥控器的核心作用是？",
        "options": ["拍摄取景", "给无人机充电", "飞行操控与指令发送", "以上都不是"],
        "answer": 2
    },
    {
        "id": 21,
        "type": "choice",
        "text": "根据我国《无人驾驶航空器飞行管理暂行条例》，无人机最大起飞重量满足以下哪个条件时，无需进行实名登记？",
        "options": ["<250g", ">600g", ">1kg", "250kg"],
        "answer": 0
    },
    {
        "id": 22,
        "type": "choice",
        "text": "根据我国空域管理相关规定，下列关于隔离空域的描述正确的是？",
        "options": ["专门分配给无人机系统运行的空域", "禁止一切航空器飞行的空域", "仅限制飞行高度的空域", "仅限制飞行距离的空域"],
        "answer": 0
    },
    {
        "id": 23,
        "type": "choice",
        "text": "以下哪种无人机，最适合用于中小学航空科普教学与组装实践？",
        "options": ["植保型无人机", "室内教育型无人机", "大型察打一体无人机", "以上都可以"],
        "answer": 1
    },
    {
        "id": 24,
        "type": "choice",
        "text": "歼 15 属于什么类型的舰载机？",
        "options": ["多旋翼", "固定翼", "复合翼", "以上都不是"],
        "answer": 1
    },
    {
        "id": 25,
        "type": "choice",
        "text": "发明坐标系的人是谁？",
        "options": ["奥迪尔", "希尔科", "奥杜尔", "笛卡尔"],
        "answer": 3
    },
    {
        "id": 26,
        "type": "choice",
        "text": "比空气轻的气体中，最安全的是什么？",
        "options": ["氮气", "氢气", "氧气", "氦气"],
        "answer": 3
    },
    {
        "id": 27,
        "type": "choice",
        "text": "直升机的雏形是什么？",
        "options": ["扑翼机", "竹蜻蜓", "热气球", "飞机"],
        "answer": 1
    },
    {
        "id": 28,
        "type": "choice",
        "text": "扑翼机的飞行原理是什么？",
        "options": ["牛顿第一定律", "律牛顿第二定律", "牛顿第三定律", "牛顿第四定律"],
        "answer": 2
    },
    {
        "id": 29,
        "type": "choice",
        "text": "运 20 于( )年首飞？",
        "options": ["2013 年", "2000 年", "1996 年", "1949 年"],
        "answer": 0
    },
    {
        "id": 30,
        "type": "choice",
        "text": "C919 最大载客量是多少？",
        "options": ["400 人", "280 人", "190 人", "520 人"],
        "answer": 2
    },
    {
        "id": 31,
        "type": "choice",
        "text": "与热气球升空原理相同的是？",
        "options": ["风筝", "飞艇", "孔明灯", "火箭"],
        "answer": 2
    },
    {
        "id": 32,
        "type": "choice",
        "text": "波音 777 是当今世界上最大的（ ）宽体客机。",
        "options": ["单发", "多发", "无发", "双发"],
        "answer": 3
    },
    {
        "id": 33,
        "type": "choice",
        "text": "民用消费级 / 工业级无人机与遥控器的主流通讯方式是？",
        "options": ["有线连接", "光纤连接", "无线连接", "以上都不是"],
        "answer": 2
    },
    {
        "id": 34,
        "type": "choice",
        "text": "当无人机正前方出现行人时，下列操作中严禁执行的是？",
        "options": ["朝行人方向飞行", "立即安全降落", "主动避让行人", "以上都不是"],
        "answer": 0
    },
    {
        "id": 35,
        "type": "choice",
        "text": "我国空域管理中，专门为无人驾驶航空器划设、与有人航空器运行隔离的空域是？",
        "options": ["隔离空域", "融合空域", "视距内空域", "中距空域"],
        "answer": 0
    },
    {
        "id": 36,
        "type": "choice",
        "text": "多镜头倾斜摄影相机，通常用于无人机的以下哪个应用场景？",
        "options": ["警用喊话", "农药喷洒", "三维测绘建模", "快递物流配送"],
        "answer": 2
    },
    {
        "id": 37,
        "type": "choice",
        "text": "使用消费级无人机进行航拍时，通过（ ）可以在地面实时查看航拍图像？",
        "options": ["充电器", "电池", "机载相机", "遥控器"],
        "answer": 3
    },
    {
        "id": 38,
        "type": "choice",
        "text": "无人机灯光三原色中的 RGB 代表的是（ ）？",
        "options": ["红绿蓝", "红黄紫", "紫黑白", "白黑绿"],
        "answer": 0
    },
    {
        "id": 39,
        "type": "choice",
        "text": "以下不属于无人机遥控器核心功能的是？",
        "options": ["给电池充电", "控制起飞", "控制降落", "查看航拍图像"],
        "answer": 0
    },
    {
        "id": 40,
        "type": "choice",
        "text": "根据我国《无人驾驶航空器飞行管理暂行条例》，下列空机重量符合轻型无人机标准的是？",
        "options": ["10kg", "200kg", "3kg", "2000kg"],
        "answer": 2
    },
    {
        "id": 41,
        "type": "choice",
        "text": "无人机第一人称视角飞行的通用英文缩写是？",
        "options": ["FPV", "UAV", "SUV", "AUV"],
        "answer": 0
    },
    {
        "id": 42,
        "type": "choice",
        "text": "C919 大型民用客机是哪个国家自主研制的？",
        "options": ["美国", "中国", "德国", "日本"],
        "answer": 1
    },
    {
        "id": 43,
        "type": "choice",
        "text": "安 225 超大型运输机的机翼采用什么布局？",
        "options": ["上单翼布局", "下单翼布局", "三翼布局", "前掠翼布局"],
        "answer": 0
    },
    {
        "id": 44,
        "type": "choice",
        "text": "遥控器是无人机行业最常见、最基础的无人机（ ）设备？",
        "options": ["地面控制", "图像拍摄", "定位导航", "动力输出"],
        "answer": 0
    },
    {
        "id": 45,
        "type": "choice",
        "text": "多旋翼无人机遥控器的操作模式，常见分为哪两种？",
        "options": ["“美国手” 和 “德国手”", "“法国手” 和 “英国手”", "“日本手” 和 “美国手”", "“左手” 和 “右手”"],
        "answer": 2
    },
    {
        "id": 46,
        "type": "choice",
        "text": "多旋翼无人机遥控器的 “美国手” 又称为（ ）？",
        "options": ["模式 1", "模式 2", "模式 3", "模式 4"],
        "answer": 1
    },
    {
        "id": 47,
        "type": "choice",
        "text": "多旋翼飞行平台具有（ ）等核心特点，目前在航拍、工业巡检等领域被广泛应用？",
        "options": ["结构简单、操控复杂", "结构简单、操控便捷", "结构复杂、操控便捷", "结构复杂、操控复杂"],
        "answer": 1
    },
    {
        "id": 48,
        "type": "choice",
        "text": "相比于（ ）无人机，（ ）是当前限制多旋翼无人机发展的最核心因素？",
        "options": ["双旋翼、续航能力差", "复合翼、续航能力强", "固定翼、续航能力差", "单旋翼、续航能力强"],
        "answer": 2
    },
    {
        "id": 49,
        "type": "choice",
        "text": "下列选项中，全部属于影响多旋翼无人机核心飞行性能的关键因素是？",
        "options": ["重量、材料、轴距", "重量、材料、动力系统", "材料、飞行速度、轴距", "动力系统、电池电量、轴距"],
        "answer": 1
    },
    {
        "id": 50,
        "type": "choice",
        "text": "在工业用途的无人机上，机架多采用（ ）、（ ）的碳纤维材料？",
        "options": ["重量更重、不易折断", "重量更轻、不易折断", "重量更重、容易折断", "以上都不是"],
        "answer": 1
    },
    {
        "id": 51,
        "type": "choice",
        "text": "以下哪项会直接影响无人机桨叶尺寸的选择？",
        "options": ["机架的颜色", "轴距的大小", "电池的电量", "遥控器重量"],
        "answer": 1
    },
    {
        "id": 52,
        "type": "choice",
        "text": "关于无人机图传通信的传输方向，描述正确的是？",
        "options": ["从地面控制系统到无人机方向", "从无人机到地面控制系统方向", "从无人机到无人机方向", "从手机到电脑方向"],
        "answer": 1
    },
    {
        "id": 53,
        "type": "choice",
        "text": "无人机图像传输（图传）与数据传输（数传）的核心区别是？",
        "options": ["传输的数据量不同", "传输的角度不同", "传输的距离不同", "传输的速度不同"],
        "answer": 0
    },
    {
        "id": 54,
        "type": "choice",
        "text": "下列选项中，属于模拟图传系统核心优点的是？",
        "options": ["传输时延低", "抗干扰能力弱", "传输图像的分辨率低", "画面清晰度差"],
        "answer": 0
    },
    {
        "id": 55,
        "type": "choice",
        "text": "蜂群无人机协同作战的核心技术是（ ）",
        "options": ["人工智能（AI）与算法", "卫星定位（GPS / 北斗）", "高能量密度电池", "隐身涂层"],
        "answer": 0
    },
    {
        "id": 56,
        "type": "choice",
        "text": "5G-A 通感一体技术对无人机通信的核心提升是（ ）",
        "options": ["实现超视距飞行（BVLOS）", "降低通信延迟至 10ms 以下", "支持高清视频实时回传", "以上都是"],
        "answer": 3
    },
    {
        "id": 57,
        "type": "choice",
        "text": "人类首次持续、有动力、可操纵的载人飞行是由（ ）实现的。",
        "options": ["莱特兄弟", "冯如", "李林塔尔", "查理"],
        "answer": 0
    },
    {
        "id": 58,
        "type": "choice",
        "text": "新中国民航的第一架飞机是（ ）。",
        "options": ["“北京” 号", "“运 10”", "C919", "初教 5"],
        "answer": 0
    },
    {
        "id": 59,
        "type": "choice",
        "text": "中国自主研制的大型客机 C919 于（ ）首飞成功。",
        "options": ["2017 年", "2020 年", "2022 年", "2025 年"],
        "answer": 0
    },
    {
        "id": 60,
        "type": "choice",
        "text": "世界上第一架飞越英吉利海峡的飞机是（ ）。",
        "options": ["布莱里奥 11 号", "飞行者 1 号", "兴登堡号", "初教 5"],
        "answer": 0
    },
    {
        "id": 61,
        "type": "choice",
        "text": "喷气式飞机突破声障是在（ ）。",
        "options": ["1930s", "1940s", "1950s", "1960s"],
        "answer": 1
    },
    {
        "id": 62,
        "type": "choice",
        "text": "中国航空工业的起步标志是（ ）。",
        "options": ["初教 5 首飞", "运 10 首飞", "C919 首飞", "歼 - 20 首飞"],
        "answer": 0
    },
    {
        "id": 63,
        "type": "choice",
        "text": "世界上第一艘用于常态化商业航行的飞艇是（ ）。",
        "options": ["兴登堡号", "齐伯林伯爵号", "查理气球", "蒙哥尔费气球"],
        "answer": 1
    },
    {
        "id": 64,
        "type": "choice",
        "text": "中国第一个航空博物馆位于（ ）。",
        "options": ["北京", "上海", "广州", "成都"],
        "answer": 0
    },
    {
        "id": 65,
        "type": "choice",
        "text": "固定翼飞机升力的产生主要依赖于（ ）。",
        "options": ["发动机推力", "机翼上下表面压力差", "机身浮力", "尾翼方向"],
        "answer": 1
    },
    {
        "id": 66,
        "type": "choice",
        "text": "伯努利定理描述的是（ ）之间的关系。",
        "options": ["压力与速度", "温度与密度", "升力与阻力", "推力与重力"],
        "answer": 0
    },
    {
        "id": 67,
        "type": "choice",
        "text": "飞机匀速直线平飞的条件是（ ）。",
        "options": ["升力＞重力，推力＞阻力", "升力 = 重力，推力 = 阻力", "升力＜重力，推力＜阻力", "升力 = 重力，推力＞阻力"],
        "answer": 1
    },
    {
        "id": 68,
        "type": "choice",
        "text": "失速是指（ ）。",
        "options": ["发动机停车", "飞机速度过快", "机翼上表面气流分离", "尾翼失效"],
        "answer": 2
    },
    {
        "id": 69,
        "type": "choice",
        "text": "民航客机的巡航高度通常位于（ ）。",
        "options": ["对流层", "平流层", "中间层", "热层"],
        "answer": 1
    },
    {
        "id": 70,
        "type": "choice",
        "text": "影响升力的因素不包括（ ）。",
        "options": ["机翼面积", "飞行速度", "空气密度", "发动机功率"],
        "answer": 3
    },
    {
        "id": 71,
        "type": "choice",
        "text": "飞机的阻力不包括（ ）。",
        "options": ["摩擦阻力", "压差阻力", "诱导阻力", "重力阻力"],
        "answer": 3
    },
    {
        "id": 72,
        "type": "choice",
        "text": "现代超声速战斗机的机翼最常采用的布局形式是（ ）。",
        "options": ["平直翼", "后掠翼", "三角翼", "飞翼"],
        "answer": 2
    },
    {
        "id": 73,
        "type": "choice",
        "text": "飞机的重心位置对（ ）影响最大。",
        "options": ["升力", "阻力", "操纵性", "推力"],
        "answer": 2
    },
    {
        "id": 74,
        "type": "choice",
        "text": "飞机的失速速度取决于（ ）。",
        "options": ["飞机重量", "空气密度", "机翼面积", "以上都是"],
        "answer": 3
    },
    {
        "id": 75,
        "type": "choice",
        "text": "下列属于轻于空气的航空器的是（ ）。",
        "options": ["飞机", "直升机", "热气球", "无人机"],
        "answer": 2
    },
    {
        "id": 76,
        "type": "choice",
        "text": "直升机的升力主要来自（ ）。",
        "options": ["机翼", "旋翼", "发动机", "尾翼"],
        "answer": 1
    },
    {
        "id": 77,
        "type": "choice",
        "text": "下列航空器中，属于典型固定翼飞机的是（ ）。",
        "options": ["直升机", "无人机", "客机", "扑翼机"],
        "answer": 2
    },
    {
        "id": 78,
        "type": "choice",
        "text": "我国现行法规中，无人驾驶航空器的法定分类不包括（ ）。",
        "options": ["微型无人机", "轻型无人机", "重型无人机", "小型无人机"],
        "answer": 2
    },
    {
        "id": 79,
        "type": "choice",
        "text": "下列航空器中，属于倾转旋翼航空器的是（ ）。",
        "options": ["直升机", "倾转旋翼机", "固定翼飞机", "热气球"],
        "answer": 1
    },
    {
        "id": 80,
        "type": "choice",
        "text": "飞机的机翼通常安装在（ ）。",
        "options": ["机身顶部", "机身底部", "机身两侧", "机身后部"],
        "answer": 2
    },
    {
        "id": 81,
        "type": "choice",
        "text": "下列航空活动中，不属于通用航空范畴的是（ ）。",
        "options": ["公共航空客机运输", "农业航空植保", "航空应急救援", "航空测绘"],
        "answer": 0
    },
    {
        "id": 82,
        "type": "choice",
        "text": "飞机尾翼的核心作用不包括以下哪项？",
        "options": ["保持飞行稳定性", "控制飞行姿态与方向", "产生主要升力", "辅助飞机减速"],
        "answer": 2
    },
    {
        "id": 83,
        "type": "choice",
        "text": "飞机的起落架主要用于（ ）。",
        "options": ["起飞和着陆", "产生升力", "控制方向", "增加速度"],
        "answer": 0
    },
    {
        "id": 84,
        "type": "choice",
        "text": "中国民用航空器的国籍标志是（ ）。",
        "options": ["B", "C", "D", "E"],
        "answer": 0
    },
    {
        "id": 85,
        "type": "choice",
        "text": "机场跑道的编号是根据（ ）确定的。",
        "options": ["长度", "方向", "宽度", "位置"],
        "answer": 1
    },
    {
        "id": 86,
        "type": "choice",
        "text": "民航客机的巡航速度通常为（ ）。",
        "options": ["200-300 km/h", "800-1000 km/h", "1500-2000 km/h", "2500-3000 km/h"],
        "answer": 1
    },
    {
        "id": 87,
        "type": "choice",
        "text": "飞机的黑匣子通常安装在（ ）。",
        "options": ["机头", "机身中部", "机尾", "机翼"],
        "answer": 2
    },
    {
        "id": 88,
        "type": "choice",
        "text": "下列属于空中交通管制工具的是（ ）。",
        "options": ["雷达", "卫星", "无线电", "以上都是"],
        "answer": 3
    },
    {
        "id": 89,
        "type": "choice",
        "text": "民航客机乘客座位的安全带卡扣，通常位于（ ）。",
        "options": ["座椅左侧", "座椅右侧", "座椅中间", "座椅下方"],
        "answer": 2
    },
    {
        "id": 90,
        "type": "choice",
        "text": "飞机的登机牌通常包括（ ）。",
        "options": ["姓名", "航班号", "座位号", "以上都是"],
        "answer": 3
    },
    {
        "id": 91,
        "type": "choice",
        "text": "民航客机的氧气面罩通常在（ ）时使用。",
        "options": ["起飞", "着陆", "客舱失压", "颠簸"],
        "answer": 2
    },
    {
        "id": 92,
        "type": "choice",
        "text": "飞机的行李舱通常位于（ ）。",
        "options": ["客舱前部", "客舱后部", "机翼下方", "机身底部"],
        "answer": 3
    },
    {
        "id": 93,
        "type": "choice",
        "text": "民航客机的乘务员主要负责（ ）。",
        "options": ["驾驶飞机", "服务乘客", "维护飞机", "空中交通管制"],
        "answer": 1
    },
    {
        "id": 94,
        "type": "choice",
        "text": "飞机飞行中最危险的气象条件是（ ）。",
        "options": ["晴空", "雷暴", "微风", "多云"],
        "answer": 1
    },
    {
        "id": 95,
        "type": "choice",
        "text": "飞机的应急出口通常位于（ ）。",
        "options": ["客舱前部", "客舱后部", "机翼附近", "以上都是"],
        "answer": 3
    },
    {
        "id": 96,
        "type": "choice",
        "text": "飞机起飞前，乘客需要（ ）。",
        "options": ["关闭手机或调至飞行模式", "系好安全带", "收起小桌板", "以上都是"],
        "answer": 3
    },
    {
        "id": 97,
        "type": "choice",
        "text": "飞机的救生衣通常位于（ ）。",
        "options": ["座椅下方", "行李舱", "客舱顶部", "卫生间"],
        "answer": 0
    },
    {"id": 98, "type": "judgment", "text": "飞机的升力是由发动机推力产生的。", "options": ["√", "×"], "answer": 1},
    {"id": 99, "type": "judgment", "text": "直升机可以垂直起降和悬停。", "options": ["√", "×"], "answer": 0},
    {"id": 100, "type": "judgment", "text": "飞机的黑匣子是黑色的。", "options": ["√", "×"], "answer": 1},
    {"id": 101, "type": "judgment", "text": "民航客机的巡航高度通常在平流层。", "options": ["√", "×"], "answer": 0},
    {
        "id": 102,
        "type": "judgment",
        "text": "飞机的应急出口只能在紧急情况下使用。",
        "options": ["√", "×"],
        "answer": 0
    },
    {"id": 103, "type": "judgment", "text": "飞机的救生衣可以在水中自动充气。", "options": ["√", "×"], "answer": 0},
    {
        "id": 104,
        "type": "judgment",
        "text": "在空气密度、飞行速度、升力系数等条件一致的情况下，飞机的机翼面积越大，产生的升力越大。",
        "options": ["√", "×"],
        "answer": 0
    },
    {"id": 105, "type": "judgment", "text": "飞机的失速是因为速度太快。", "options": ["√", "×"], "answer": 1},
    {
        "id": 106,
        "type": "judgment",
        "text": "民航客机的氧气面罩可以提供 100% 的氧气。",
        "options": ["√", "×"],
        "answer": 1
    },
    {
        "id": 107,
        "type": "judgment",
        "text": "民航客机在高空巡航飞行阶段，通常会收起起落架，以降低飞行阻力、提升燃油经济性。",
        "options": ["√", "×"],
        "answer": 0
    },
    {
        "id": 108,
        "type": "judgment",
        "text": "民航干线客机的驾驶舱内，通常会配备两名飞行员（机长与副驾驶），共同承担飞行驾驶职责。",
        "options": ["√", "×"],
        "answer": 0
    },
    {
        "id": 109,
        "type": "judgment",
        "text": "民航亚音速客机的机翼，通常采用上表面凸起、下表面相对平缓的翼型设计。",
        "options": ["√", "×"],
        "answer": 0
    },
    {"id": 110, "type": "judgment", "text": "飞机的应急灯在断电时会自动开启。", "options": ["√", "×"], "answer": 0},
    {"id": 111, "type": "judgment", "text": "飞机的防冰系统用于防止机翼结冰。", "options": ["√", "×"], "answer": 0},
    {
        "id": 112,
        "type": "judgment",
        "text": "民航客机的无氧行李舱，严禁存放活体动物。",
        "options": ["√", "×"],
        "answer": 0
    },
    {
        "id": 113,
        "type": "judgment",
        "text": "无人机自动飞行系统中，飞控计算机的主要作用是实时监测飞行状态并调整控制指令。",
        "options": ["√", "×"],
        "answer": 0
    },
    {
        "id": 114,
        "type": "judgment",
        "text": "PID 控制算法是无人机飞行控制系统中的经典线性控制方法。",
        "options": ["√", "×"],
        "answer": 0
    },
    {
        "id": 115,
        "type": "judgment",
        "text": "无人机自动悬停功能可通过调整动力系统（如电机转速）的输出实现。",
        "options": ["√", "×"],
        "answer": 0
    },
    {
        "id": 116,
        "type": "judgment",
        "text": "具备自主避障功能的无人机，飞行过程中会进行实时轨迹规划，动态规避障碍物，保障飞行安全。",
        "options": ["√", "×"],
        "answer": 0
    },
    {
        "id": 117,
        "type": "judgment",
        "text": "无人机物流配送在偏远山区或交通拥堵区域的应用，核心价值在于提升配送效率并降低成本。",
        "options": ["√", "×"],
        "answer": 0
    },
    {
        "id": 118,
        "type": "judgment",
        "text": "医疗无人机仅能用于紧急血液运输，无法满足检验样本、急救药品等其他医疗物资的配送需求。",
        "options": ["√", "×"],
        "answer": 1
    },
    {
        "id": 119,
        "type": "judgment",
        "text": "无人机物流的规模化应用面临的主要技术瓶颈是恶劣天气（如暴雨、大风）下的飞行稳定性，以及续航能力不足导致的航程限制。",
        "options": ["√", "×"],
        "answer": 0
    },
    {
        "id": 120,
        "type": "judgment",
        "text": "无人机在医疗领域的应用中，无需考虑起降点的基础设施建设和空域审批等问题，仅需关注飞行技术即可。",
        "options": ["√", "×"],
        "answer": 1
    }
];

// Exam Configurations
const EXAMS = [
    {id: 1, name: "基础航空知识卷", desc: "涵盖航空历史、原理与基础法规", range: [1, 40]},
    {id: 2, name: "无人机技术与操作卷", desc: "涵盖无人机系统、构造与飞行控制", range: [41, 80]},
    {id: 3, name: "综合法规与安全卷", desc: "涵盖空域管理、民航知识及安全规范", range: [81, 120]},
    {id: 4, name: "模拟考试", desc: "从所有题目中随机抽取10道题", range: [1, 120], random: true, count: 10},
];

// ==========================================
// 2. State Management
// ==========================================

const state = {
    currentUser: null, // { id, name }
    currentExam: null,
    currentQuestions: [],
    currentQuestionIndex: 0,
    score: 0,
    history: []
};

// Get app element dynamically to ensure DOM is ready
function getApp() {
    return document.getElementById('app');
}

// ==========================================
// 3. Helper Functions
// ==========================================

// Shuffle array using Fisher-Yates algorithm
function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;
    // Create a copy to avoid mutating original
    const newArray = [...array];
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [newArray[currentIndex], newArray[randomIndex]] = [newArray[randomIndex], newArray[currentIndex]];
    }
    return newArray;
}

// Get storage key for specific user
function getStorageKey() {
    if (!state.currentUser) return null;
    return `quiz_history_${state.currentUser.学号}_${state.currentUser.姓名}`;
}

// Load history from localStorage
function loadHistory() {
    const key = getStorageKey();
    if (key) {
        const data = localStorage.getItem(key);
        state.history = data ? JSON.parse(data) : [];
    }
}

// Save history to localStorage
function saveHistory() {
    const key = getStorageKey();
    if (key) {
        localStorage.setItem(key, JSON.stringify(state.history));
    }
}

// Save login state to localStorage (expires in 7 days)
function saveLoginState() {
    if (!state.currentUser) return;

    const loginData = {
        user: state.currentUser,
        timestamp: Date.now(),
        expiresAt: Date.now() + (30 * 24 * 60 * 60 * 1000) // 30 days (1 month) in milliseconds
    };

    localStorage.setItem('quiz_login_state', JSON.stringify(loginData));
}

// Load login state from localStorage
function loadLoginState() {
    const data = localStorage.getItem('quiz_login_state');
    if (!data) return null;

    try {
        const loginData = JSON.parse(data);

        // Check if expired
        if (Date.now() > loginData.expiresAt) {
            localStorage.removeItem('quiz_login_state');
            return null;
        }

        // Refresh login state (extend expiration time)
        saveLoginState();

        return loginData.user;
    } catch (e) {
        return null;
    }
}

// Clear login state from localStorage
function clearLoginState() {
    localStorage.removeItem('quiz_login_state');
}
// Format date
function formatDate(timestamp) {
    const date = new Date(timestamp);
    return `${date.getMonth() + 1}月${date.getDate()}日 ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
}

// ==========================================
// 4. View Rendering Functions
// ==========================================

// Render Login View
function renderLogin() {
    let listHtml = STUDENTS.map(s =>
        `<div class="flex justify-between py-2 border-b border-gray-100 text-sm text-gray-600">
                    <span>${s.学号}</span>
                    <span>${s.姓名}</span>
                 </div>`
    ).join('');

    getApp().innerHTML = `
                <div class="flex-1 flex flex-col p-6 fade-in h-full overflow-y-auto">
                    <div class="mb-8 text-center">
                        <div class="w-20 h-20 bg-blue-600 rounded-full mx-auto flex items-center justify-center mb-4 shadow-lg">
                            <i class="fas fa-plane text-white text-3xl"></i>
                        </div>
                        <h1 class="text-2xl font-bold text-gray-800">航空小知识</h1>
                        <p class="text-gray-500 text-sm mt-1">请输入学号和姓名登录</p>
                    </div>

                    <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-6">
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2">学号</label>
                            <input type="text" id="login-id" class="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:outline-none transition" placeholder="请输入学号">
                        </div>
                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2">姓名</label>
                            <input type="text" id="login-name" class="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:outline-none transition" placeholder="请输入姓名">
                        </div>
                        <div id="login-error" class="text-red-500 text-sm mb-4 hidden text-center"></div>
                        <button onclick="handleLogin()" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow transition transform active:scale-95">
                            登 录
                        </button>
                    </div>

                </div>
            `;
}

// Handle Login Logic
function handleLogin() {
    const idInput = document.getElementById('login-id').value.trim();
    const nameInput = document.getElementById('login-name').value.trim();
    const errorDiv = document.getElementById('login-error');

    // Find user in list
    const user = STUDENTS.find(s => s.学号 === idInput && s.姓名 === nameInput);
    if (user) {
        state.currentUser = user;
        saveLoginState();
        loadHistory();
        renderDashboard();
    } else {
        errorDiv.textContent = "学号或姓名不正确，请核对名单";
        errorDiv.classList.remove('hidden');
    }
}

// Render Dashboard View
function renderDashboard() {
    const historyHtml = state.history.length > 0 ? state.history.map((h, index) => `
                <div class="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
                    <div>
                        <div class="font-medium text-gray-800 text-sm">${h.examName}</div>
                        <div class="text-xs text-gray-400">${formatDate(h.date)}</div>
                    </div>
                    <div class="font-bold ${h.score >= Math.ceil((h.total || 10) * 0.8) ? 'text-green-500' : (h.score >= Math.ceil((h.total || 10) * 0.6) ? 'text-blue-500' : 'text-red-500')}">
                        ${h.score}分
                    </div>
                </div>
            `).join('') : '<div class="text-center text-gray-400 py-4 text-sm">暂无答题记录</div>';

    getApp().innerHTML = `
                <div class="flex-1 flex flex-col h-full overflow-hidden bg-gray-50">
                    <!-- Header -->
                    <div class="bg-white p-4 shadow-sm flex justify-between items-center z-10">
                        <div>
                            <div class="text-sm text-gray-500">欢迎回来</div>
                            <div class="font-bold text-lg text-gray-800">${state.currentUser.姓名}</div>
                        </div>
                        <button onclick="logout()" class="text-gray-400 hover:text-red-500 transition">
                            <i class="fas fa-sign-out-alt text-xl"></i>
                        </button>
                    </div>

                    <!-- Scrollable Content -->
                    <div class="flex-1 overflow-y-auto p-4 pb-20">
                        <h2 class="text-gray-800 font-bold mb-4">选择试卷</h2>
                        <div class="space-y-4 mb-8">
                            ${EXAMS.map(exam => `
                                <div onclick="startExam(${exam.id})" class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition active:scale-[0.98]">
                                    <div class="flex items-start justify-between">
                                        <div>
                                            <h3 class="font-bold text-gray-800 mb-1">${exam.name}</h3>
                                            <p class="text-xs text-gray-500">${exam.desc}</p>
                                        </div>
                                        <div class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                                            <i class="fas fa-file-alt"></i>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>

                        <h2 class="text-gray-800 font-bold mb-4">历史成绩</h2>
                        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
                            ${historyHtml}
                        </div>
                    </div>
                </div>
            `;
}

// Logout
function logout() {
    state.currentUser = null;
    state.history = [];
    clearLoginState();
    renderLogin();
}

// Start Exam
function startExam(examId) {
    const examConfig = EXAMS.find(e => e.id === examId);
    if (!examConfig) return;

    // Filter questions by range
    let filteredQuestions = QUESTIONS.filter(q => q.id >= examConfig.range[0] && q.id <= examConfig.range[1]);

    // Randomize questions
    filteredQuestions = shuffleArray(filteredQuestions);

    // If it's a random exam, select only specified count
    if (examConfig.random && examConfig.count) {
        filteredQuestions = filteredQuestions.slice(0, examConfig.count);
    }

    state.currentQuestions = filteredQuestions;
    state.currentExam = examConfig;
    state.currentQuestionIndex = 0;
    state.score = 0;

    renderQuiz();
}

// Render Quiz View
function renderQuiz() {
    const question = state.currentQuestions[state.currentQuestionIndex];
    const progress = ((state.currentQuestionIndex) / state.currentQuestions.length) * 100;

    // Generate options HTML
    const optionsHtml = question.options.map((opt, idx) => `
                <button onclick="handleAnswer(${idx})" id="opt-${idx}" class="option-btn w-full text-left p-4 mb-3 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 flex items-center transition group">
                    <span class="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center mr-3 font-bold text-sm group-hover:bg-blue-100 group-hover:text-blue-600">
                        ${String.fromCharCode(65 + idx)}
                    </span>
                    <span class="text-gray-700 font-medium">${opt}</span>
                </button>
            `).join('');

    getApp().innerHTML = `
                <div class="flex-1 flex flex-col h-full bg-white">
                    <!-- Progress Bar -->
                    <div class="h-2 bg-gray-100 w-full">
                        <div class="h-full bg-blue-600 transition-all duration-300" style="width: ${progress}%"></div>
                    </div>

                    <!-- Header -->
                    <div class="p-4 flex justify-between items-center border-b border-gray-100">
                        <span class="text-sm font-bold text-gray-500">
                            ${state.currentQuestionIndex + 1} / ${state.currentQuestions.length}
                        </span>
                        <span class="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-md">
                            ${state.currentExam.name}
                        </span>
                    </div>

                    <!-- Question Area -->
                    <div class="flex-1 overflow-y-auto p-6 fade-in">
                        <h2 class="text-xl font-bold text-gray-800 mb-6 leading-relaxed">
                            ${question.text}
                        </h2>
                        <div id="options-container">
                            ${optionsHtml}
                        </div>
                        
                        <!-- Feedback Area (Hidden initially) -->
                        <div id="feedback-area" class="hidden mt-6 p-4 rounded-xl bg-gray-50 border border-gray-200">
                            <div id="feedback-text" class="font-bold text-lg mb-1"></div>
                            <div id="correct-answer-text" class="text-sm text-gray-600"></div>
                        </div>
                    </div>

                    <!-- Footer -->
                    <div class="p-4 border-t border-gray-100 bg-white">
                        <button id="next-btn" onclick="nextQuestion()" disabled class="w-full bg-gray-300 text-white font-bold py-3 rounded-xl shadow transition cursor-not-allowed">
                            下一题
                        </button>
                        <button onclick="endQuiz()" class="w-full mt-3 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 font-bold py-3 rounded-xl shadow-sm transition active:scale-95">
                            结束做题
                        </button>
                    </div>
                </div>
            `;
}

// Handle Answer Selection
function handleAnswer(selectedIndex) {
    const question = state.currentQuestions[state.currentQuestionIndex];
    const isCorrect = selectedIndex === question.answer;
    const buttons = document.querySelectorAll('.option-btn');
    const feedbackArea = document.getElementById('feedback-area');
    const feedbackText = document.getElementById('feedback-text');
    const correctAnswerText = document.getElementById('correct-answer-text');
    const nextBtn = document.getElementById('next-btn');

    // Disable all buttons
    buttons.forEach(btn => {
        btn.classList.add('disabled-opt');
        btn.classList.remove('hover:bg-gray-50', 'group-hover:bg-blue-100', 'group-hover:text-blue-600');
    });

    // Highlight selected button
    const selectedBtn = document.getElementById(`opt-${selectedIndex}`);
    const correctBtn = document.getElementById(`opt-${question.answer}`);

    // 先将选中的选项变为蓝色
    selectedBtn.classList.remove('bg-white', 'border-gray-200');
    selectedBtn.classList.add('bg-blue-50', 'border-blue-500');
    selectedBtn.querySelector('span:first-child').classList.remove('bg-gray-100', 'text-gray-600');
    selectedBtn.querySelector('span:first-child').classList.add('bg-blue-500', 'text-white');

    // 延迟显示对错结果
    setTimeout(() => {
        if (isCorrect) {
            state.score++;
            // 正确：蓝色变为绿色
            selectedBtn.classList.remove('bg-blue-50', 'border-blue-500');
            selectedBtn.classList.add('bg-green-50', 'border-green-500');
            selectedBtn.querySelector('span:first-child').classList.remove('bg-blue-500');
            selectedBtn.querySelector('span:first-child').classList.add('bg-green-500');
            
            feedbackText.textContent = "回答正确！";
            feedbackText.className = "font-bold text-lg mb-1 text-green-600";
            correctAnswerText.textContent = "";
        } else {
            // 错误：蓝色变为红色
            selectedBtn.classList.remove('bg-blue-50', 'border-blue-500');
            selectedBtn.classList.add('bg-red-50', 'border-red-500');
            selectedBtn.querySelector('span:first-child').classList.remove('bg-blue-500');
            selectedBtn.querySelector('span:first-child').classList.add('bg-red-500');
            
            // 正确答案变为绿色
            correctBtn.classList.remove('bg-white', 'border-gray-200');
            correctBtn.classList.add('bg-green-50', 'border-green-500');
            correctBtn.querySelector('span:first-child').classList.remove('bg-gray-100', 'text-gray-600');
            correctBtn.querySelector('span:first-child').classList.add('bg-green-500', 'text-white');
            
            feedbackText.textContent = "回答错误";
            feedbackText.className = "font-bold text-lg mb-1 text-red-600";
            correctAnswerText.textContent = `正确答案：${question.options[question.answer]}`;
        }

        // Show feedback
        feedbackArea.classList.remove('hidden');

        // Enable next button
        nextBtn.disabled = false;
        nextBtn.classList.remove('bg-gray-300', 'cursor-not-allowed');
        nextBtn.classList.add('bg-blue-600', 'hover:bg-blue-700', 'shadow-lg', 'active:scale-95');
        nextBtn.textContent = state.currentQuestionIndex === state.currentQuestions.length - 1 ? "查看成绩" : "下一题";
    }, 300); // 300毫秒延迟
}

// Next Question
function nextQuestion() {
    if (state.currentQuestionIndex < state.currentQuestions.length - 1) {
        state.currentQuestionIndex++;
        renderQuiz();
    } else {
        renderResult();
    }
}

// End Quiz and return to dashboard
function endQuiz() {
    renderResult();
}

// Render Result View
function renderResult() {
    const total = state.currentQuestions.length;
    const score = state.score; // 直接使用答对题数作为分数
    
    // 动态计算及格线
    const passLine = Math.ceil(total * 0.6);  // 60%及格线
    const excellentLine = Math.ceil(total * 0.8);  // 80%优秀线

    // Save to history
    const record = {
        examName: state.currentExam.name,
        score: score,
        total: total,  // 保存题目总数
        date: Date.now()
    };
    state.history.unshift(record); // Add to beginning
    saveHistory();

    // Trigger confetti if score is high
    if (score >= passLine) {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: {y: 0.6}
        });
    }

    getApp().innerHTML = `
                <div class="flex-1 flex flex-col items-center justify-center p-8 bg-white fade-in h-full">
                    <div class="w-32 h-32 rounded-full flex items-center justify-center mb-6 shadow-inner ${score >= excellentLine ? 'bg-green-100' : (score >= passLine ? 'bg-blue-100' : 'bg-red-100')}">
                        <span class="text-4xl font-bold ${score >= excellentLine ? 'text-green-600' : (score >= passLine ? 'text-blue-600' : 'text-red-600')}">
                            ${score}
                        </span>
                    </div>
                    
                    <h2 class="text-2xl font-bold text-gray-800 mb-2">
                        ${score >= excellentLine ? '太棒了！' : (score >= passLine ? '考试通过' : '继续加油')}
                    </h2>
                    <p class="text-gray-500 mb-8 text-center">
                        本次答题共 ${total} 题<br>
                        答对 ${score} 题，答错 ${total - score} 题
                    </p>

                    <div class="w-full space-y-4">
                        <button onclick="startExam(${state.currentExam.id})" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow transition active:scale-95">
                            再测一次
                        </button>
                        <button onclick="renderDashboard()" class="w-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 font-bold py-3 rounded-xl shadow-sm transition active:scale-95">
                            返回首页
                        </button>
                    </div>
                </div>
            `;
}
document.addEventListener('DOMContentLoaded', function () {
    // Try to auto-login from cache
    const cachedUser = loadLoginState();
    if (cachedUser) {
        state.currentUser = cachedUser;
        loadHistory();
        renderDashboard();
    } else {
        renderLogin();
    }
});
