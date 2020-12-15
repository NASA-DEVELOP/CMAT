// Tool Created by the Powder River Basin TI Team located at NASA Ames Research Center in the Summer 2019 Term //

var county = ee.FeatureCollection("users/ginarosacova/powderriverbasin/campbellcounty"),
    roi = ee.FeatureCollection("users/ginarosacova/powderriverbasin/2019Summer_ARC_PowderRiverBasinTI_StudyArea"),
    mines = ee.FeatureCollection("users/ginarosacova/powderriverbasin/PRBRC_mines"),
    buckskin = /* color: #d63000 */ee.Geometry.Polygon(
        [[[-105.56391838972195, 44.48849000414237],
          [-105.56357506696804, 44.4698728521975],
          [-105.58451775495632, 44.467912806436324],
          [-105.57456139509304, 44.439239616778615],
          [-105.49868706647976, 44.436788263759084],
          [-105.50246361677273, 44.505876976492864],
          [-105.54778222028835, 44.50465271151579]]]),
    rawhide = /* color: #98ff00 */ee.Geometry.Polygon(
        [[[-105.57833794538601, 44.44120062514819],
          [-105.58760765974148, 44.43531740258341],
          [-105.58383110944851, 44.41790940084402],
          [-105.57421807233914, 44.41570238251018],
          [-105.5560219663821, 44.4159476108831],
          [-105.54228905622585, 44.39559015630119],
          [-105.48770073835476, 44.394854212027454],
          [-105.48392418806179, 44.39068368631766],
          [-105.4461586851321, 44.39191034237792],
          [-105.44890526716335, 44.42428476366286],
          [-105.46607140485867, 44.423794375820044],
          [-105.46847466413601, 44.42820771831465],
          [-105.49697045271023, 44.43727854259032]]]),
    eagle_butte = /* color: #0b4a8b */ee.Geometry.Polygon(
        [[[-105.54537896101101, 44.395099527813734],
          [-105.55464867536648, 44.396080780675085],
          [-105.55636528913601, 44.40221323826816],
          [-105.56941155378445, 44.400986798168965],
          [-105.57456139509304, 44.37424401466322],
          [-105.5725014585696, 44.353626561128344],
          [-105.54949883405789, 44.35436302370011],
          [-105.54743889753445, 44.35951800255719],
          [-105.54366234724148, 44.35951800255719],
          [-105.54091576521023, 44.351171619046255],
          [-105.53610924665554, 44.35092611918211],
          [-105.5285561460696, 44.35878160477179],
          [-105.52889946882351, 44.342332976077955],
          [-105.52546624128445, 44.34159636233903],
          [-105.52374962751492, 44.33864981483266],
          [-105.49044732038601, 44.337422043000544],
          [-105.48941735212429, 44.34577038448655],
          [-105.46538475935085, 44.34626142637711],
          [-105.46710137312039, 44.38823029706855],
          [-105.48049096052273, 44.388475640621174],
          [-105.48598412458523, 44.387003563879745],
          [-105.48770073835476, 44.39387293859841],
          [-105.49834374372585, 44.394363577369695],
          [-105.50006035749539, 44.41177858868117],
          [-105.53439263288601, 44.415457153108854]]]),
    dry_fork = /* color: #ffc82d */ee.Geometry.Polygon(
        [[[-105.42487267438992, 44.33300185153878],
          [-105.41457299177273, 44.343069580561775],
          [-105.4186928648196, 44.35485399360619],
          [-105.42315606062039, 44.35559044075264],
          [-105.42349938337429, 44.35829066777305],
          [-105.41937951032742, 44.362218048586826],
          [-105.4183495420657, 44.37988800439469],
          [-105.4293358701907, 44.37988800439469],
          [-105.43688897077664, 44.384795379352056],
          [-105.45302514021023, 44.38675821415686],
          [-105.48152092878445, 44.389702342958586],
          [-105.47946099226101, 44.3546085091673],
          [-105.48392418806179, 44.3546085091673],
          [-105.48358086530789, 44.347489013107456],
          [-105.47705773298367, 44.34429723413455],
          [-105.47156456892117, 44.329809283828986],
          [-105.47259453718289, 44.31851111033439],
          [-105.45062188093289, 44.31703727511188],
          [-105.42658928815945, 44.31752855763267]]]),
    wyodak = /* color: #00ffff */ee.Geometry.Polygon(
        [[[-105.43311242048367, 44.33693092706929],
          [-105.43139580671414, 44.30106835402466],
          [-105.42143944685085, 44.30106835402466],
          [-105.41182640974148, 44.29689115023792],
          [-105.41251305524929, 44.28583241161459],
          [-105.41594628278835, 44.28583241161459],
          [-105.41628960554226, 44.27206751775723],
          [-105.40530327741726, 44.268379945054974],
          [-105.38127068464382, 44.267396553259736],
          [-105.37921074812039, 44.28312884768003],
          [-105.36685112897976, 44.29345087691846],
          [-105.36685112897976, 44.29959408073992],
          [-105.37268761579617, 44.29983979552481],
          [-105.37303093855007, 44.30401678953682],
          [-105.36959771101101, 44.30475387527787],
          [-105.37062767927273, 44.3226867757608],
          [-105.35620812360867, 44.31949364658292],
          [-105.3527748960696, 44.32145866972044],
          [-105.36685112897976, 44.32833573242485],
          [-105.3853905576907, 44.329318104140945],
          [-105.38642052595242, 44.33619424545993],
          [-105.40564660017117, 44.33668536756117],
          [-105.40598992292507, 44.35166261568948],
          [-105.41216973249539, 44.35166261568948],
          [-105.41148308698757, 44.33643980702472]]]),
    caballo = /* color: #bf04c2 */ee.Geometry.Polygon(
        [[[-105.43590894168574, 44.1790651517352],
          [-105.44174542850214, 44.179803804596865],
          [-105.44277539676386, 44.13546825403555],
          [-105.4393421692248, 44.13275777919614],
          [-105.41530957645136, 44.11452044223907],
          [-105.40157666629511, 44.11476693026522],
          [-105.4008900207873, 44.10392048451368],
          [-105.34183850711543, 44.104167016748846],
          [-105.34149518436152, 44.10712532337843],
          [-105.32535901492793, 44.106878803480605],
          [-105.30613294070918, 44.11550638817494],
          [-105.30544629520136, 44.120928796778365],
          [-105.31093945926386, 44.12536494278174],
          [-105.2961765808459, 44.13916415560078],
          [-105.29548993533808, 44.1662603651576],
          [-105.31540265506464, 44.16576781784427],
          [-105.31505933231074, 44.18325072892962],
          [-105.32432904666621, 44.18398932935338],
          [-105.32329907840449, 44.19063631674657],
          [-105.32810559695918, 44.19063631674657],
          [-105.32776227420527, 44.183496930099075],
          [-105.3456150574084, 44.18374313024032],
          [-105.34767499393183, 44.18718982425708],
          [-105.36587109988886, 44.186697451735924],
          [-105.3675877136584, 44.19088248707001],
          [-105.43522229617793, 44.191128656365244]]]),
    belle_ayr = /* color: #ff0000 */ee.Geometry.Polygon(
        [[[-105.44414868777949, 44.13941054081326],
          [-105.45341840213496, 44.138671382091346],
          [-105.46303143924433, 44.129800755669415],
          [-105.46337476199824, 44.12610426806277],
          [-105.45719495242793, 44.12511849896515],
          [-105.46406140750605, 44.10022237761257],
          [-105.46886792606074, 44.099729279214564],
          [-105.46852460330683, 44.067915745659654],
          [-105.45376172488886, 44.05952793452067],
          [-105.44243207400996, 44.05952793452067],
          [-105.44277539676386, 44.0634752878039],
          [-105.40741315311152, 44.06372198864556],
          [-105.40706983035761, 44.07852215777611],
          [-105.36964765018183, 44.07605571993991],
          [-105.35969129031855, 44.079508704124315],
          [-105.35831799930293, 44.08542763677686],
          [-105.3404652160998, 44.08616746172086],
          [-105.32879224246699, 44.108850933876106],
          [-105.34218182986933, 44.108357907445914],
          [-105.34321179813105, 44.11723175397998],
          [-105.34801831668574, 44.118710598858776],
          [-105.37102094119746, 44.117971181045945],
          [-105.37205090945918, 44.11501341726326],
          [-105.38681378787714, 44.11525990323317],
          [-105.38612714236933, 44.12511849896515],
          [-105.40912976688105, 44.13990330815379]]]),
    cordero_rojo = /* color: #00ff00 */ee.Geometry.Polygon(
        [[[-105.32055249637324, 44.0898664476484],
          [-105.42560925906855, 44.08937326288994],
          [-105.44071546024043, 44.07852215777611],
          [-105.43728223270136, 44.04891811848117],
          [-105.4228626770373, 44.046450446968784],
          [-105.42148938602168, 44.040034019912504],
          [-105.40706983035761, 44.03411054734598],
          [-105.40569653934199, 43.96149995341178],
          [-105.33909192508418, 43.961005699514274],
          [-105.33909192508418, 43.976325658359514],
          [-105.33428540652949, 43.97780802531981],
          [-105.3349720520373, 44.01189225146326],
          [-105.31780591434199, 44.03213592490248],
          [-105.31780591434199, 44.05582705179368],
          [-105.29857984012324, 44.05582705179368],
          [-105.29857984012324, 44.068162427996114]]]),
    coal_creek = /* color: #0000ff */ee.Geometry.Polygon(
        [[[-105.24021497195918, 43.9496367250337],
          [-105.25188794559199, 43.963971161222894],
          [-105.25875440067011, 43.97434911151352],
          [-105.27248731082636, 43.975831527815764],
          [-105.2745472473498, 44.00300260158815],
          [-105.28690686649043, 44.00250869308683],
          [-105.28759351199824, 43.98176082295954],
          [-105.31025281375605, 43.98176082295954],
          [-105.35007825320918, 43.96891326846229],
          [-105.34801831668574, 43.95062541785626],
          [-105.31917920535761, 43.950131073500835],
          [-105.31780591434199, 43.939748892239365],
          [-105.30681958621699, 43.92441950116474],
          [-105.30063977664668, 43.90018111471604],
          [-105.2690540832873, 43.90018111471604],
          [-105.26630750125605, 43.908096775314775],
          [-105.25875440067011, 43.90562324444254],
          [-105.25875440067011, 43.8967176822337],
          [-105.2470814270373, 43.8967176822337],
          [-105.24776807254511, 43.907107375300264],
          [-105.23815503543574, 43.90760207736326]]]),
    black_thunder = /* color: #999900 */ee.Geometry.Polygon(
        [[[-105.3697928838717, 43.77876479121626],
          [-105.37940592098107, 43.77876479121626],
          [-105.37940592098107, 43.74057835171243],
          [-105.38695902156701, 43.73909007508813],
          [-105.38833231258263, 43.729663464048976],
          [-105.42953104305138, 43.72867110288371],
          [-105.43090433406701, 43.70683499756164],
          [-105.45150369930138, 43.70336033802544],
          [-105.45081705379357, 43.6750591848166],
          [-105.41305155086388, 43.67555581135979],
          [-105.36567301082482, 43.63332788261172],
          [-105.25855631160607, 43.63283090672554],
          [-105.25718302059045, 43.60747968704756],
          [-105.20293802547326, 43.60797687252777],
          [-105.21255106258263, 43.64674467803206],
          [-105.19607157039513, 43.64922894098914],
          [-105.19675821590295, 43.70733136105436],
          [-105.18508524227013, 43.70782772043682],
          [-105.19057840633263, 43.76785686685346],
          [-105.33546060848107, 43.79958348562073],
          [-105.36292642879357, 43.79859228365258]]]),
    north_antelope_rochelle = /* color: #009999 */ee.Geometry.Polygon(
        [[[-105.30593485164513, 43.472092667225304],
          [-105.2379569463717, 43.47159435995812],
          [-105.2379569463717, 43.52488993688855],
          [-105.16791910457482, 43.52488993688855],
          [-105.16723245906701, 43.570179063924705],
          [-105.15487283992638, 43.57167153266757],
          [-105.15693277644982, 43.59554600265124],
          [-105.18989176082482, 43.62587281279448],
          [-105.22285074519982, 43.62537577526208],
          [-105.25237650203576, 43.652209920911424],
          [-105.28533548641076, 43.652209920911424],
          [-105.28602213191857, 43.66115197293603],
          [-105.35674661922326, 43.66115197293603],
          [-105.3588065557467, 43.63929127268234],
          [-105.39107889461388, 43.64028511349017],
          [-105.39382547664513, 43.62537577526208],
          [-105.41511148738732, 43.62487873361994],
          [-105.4137381963717, 43.543806017971406],
          [-105.38557538293475, 43.53459805347286],
          [-105.37150003077215, 43.5230221133623],
          [-105.35759864519781, 43.52121713107969],
          [-105.3533133916842, 43.502481641005176],
          [-105.3134632006803, 43.49078897802385]]]),
    antelope = /* color: #ff00ff */ee.Geometry.Polygon(
        [[[-105.2928885869967, 43.47308926943386],
          [-105.29151529598107, 43.50497186254878],
          [-105.32722086238732, 43.50696396582427],
          [-105.33752054500451, 43.51592761700427],
          [-105.3368338994967, 43.52787708100274],
          [-105.34644693660607, 43.5487829478597],
          [-105.41236490535607, 43.5487829478597],
          [-105.41442484187951, 43.5194131218212],
          [-105.43914408016076, 43.519911034644934],
          [-105.43983072566857, 43.460132158846086],
          [-105.43090433406701, 43.455646358086625],
          [-105.42197794246545, 43.42972188218158],
          [-105.33752054500451, 43.43022053455799]]]);

//// reference sites ////

// individual mine reference sites //
var buckskin_ref = /* color: #d63000 */ee.Geometry.MultiPolygon(    // We recommend NOT converting these geometries to import records, unless you would like to display them all on the map
        [[[[-105.63925232428903, 44.57684109112892],
           [-105.63925232428903, 44.540636107170265],
           [-105.54312195319528, 44.540636107170265],
           [-105.54312195319528, 44.57684109112892]]],
         [[[-105.69030495883874, 44.506213922826106],
           [-105.69030495883874, 44.47878438334753],
           [-105.64086648227624, 44.47878438334753],
           [-105.64086648227624, 44.506213922826106]]],
         [[[-105.26252480747155, 44.54439785381139],
           [-105.26252480747155, 44.51845508769436],
           [-105.21651955844811, 44.51845508769436],
           [-105.21651955844811, 44.54439785381139]]]], null, false),
    rawhide_ref = /* color: #98ff00 */ee.Geometry.MultiPolygon(
        [[[[-105.75186218757028, 44.43875009514393],
           [-105.75186218757028, 44.39951577735219],
           [-105.64749207038278, 44.39951577735219],
           [-105.64749207038278, 44.43875009514393]]],
         [[[-105.4171622529771, 44.42863476558216],
           [-105.4171622529771, 44.40497062375137],
           [-105.36137230546734, 44.40497062375137],
           [-105.36137230546734, 44.42863476558216]]],
         [[[-105.29624848855622, 44.45135000770585],
           [-105.29624848855622, 44.429288701412986],
           [-105.23685365213043, 44.429288701412986],
           [-105.23685365213043, 44.45135000770585]]]], null, false),
    eagle_butte_ref = /* color: #0b4a8b */ee.Geometry.MultiPolygon(
        [[[[-105.73697149030727, 44.3924549277999],
           [-105.73697149030727, 44.357117270030194],
           [-105.64908086530727, 44.357117270030194],
           [-105.64908086530727, 44.3924549277999]]],
         [[[-105.37299128106667, 44.38046916183465],
           [-105.37299128106667, 44.35101656607974],
           [-105.3139397673948, 44.35101656607974],
           [-105.3139397673948, 44.38046916183465]]],
         [[[-105.89112283462288, 44.40955092603624],
           [-105.89112283462288, 44.383057422742546],
           [-105.84443094009163, 44.383057422742546],
           [-105.84443094009163, 44.40955092603624]]]], null, false),
    wyodak_ref = /* color: #00ffff */ee.Geometry.MultiPolygon(
        [[[[-105.75333131336049, 44.32525263461307],
           [-105.75333131336049, 44.28987443618357],
           [-105.66544068836049, 44.28987443618357],
           [-105.66544068836049, 44.32525263461307]]],
         [[[-105.25482667468862, 44.338022854825574],
           [-105.25482667468862, 44.306583464826275],
           [-105.17242921375112, 44.306583464826275],
           [-105.17242921375112, 44.338022854825574]]],
         [[[-105.88104737781362, 44.32525263461307],
           [-105.88104737781362, 44.284959111089],
           [-105.79727662586049, 44.284959111089],
           [-105.79727662586049, 44.32525263461307]]]], null, false),
    caballo_ref = /* color: #bf04c2 */ee.Geometry.MultiPolygon(
        [[[[-105.90851319812612, 44.150119174384535],
           [-105.90851319812612, 44.10871954390727],
           [-105.76019776843862, 44.10871954390727],
           [-105.76019776843862, 44.150119174384535]]],
         [[[-105.16556275867299, 44.16194231030025],
           [-105.16556275867299, 44.11069161288715],
           [-105.08453858875112, 44.11069161288715],
           [-105.08453858875112, 44.16194231030025]]],
         [[[-105.7492297112272, 44.1880265167995],
           [-105.7492297112272, 44.160940305072394],
           [-105.67301205986001, 44.160940305072394],
           [-105.67301205986001, 44.1880265167995]]]], null, false),
    belle_ayr_ref = /* color: #ff0000 */ee.Geometry.MultiPolygon(
        [[[[-105.63489615412766, 44.09554667354897],
           [-105.63489615412766, 44.05756306165421],
           [-105.54219901057297, 44.05756306165421],
           [-105.54219901057297, 44.09554667354897]]],
         [[[-105.24350821467453, 44.089382160573614],
           [-105.24350821467453, 44.043004438797595],
           [-105.14875113459641, 44.043004438797595],
           [-105.14875113459641, 44.089382160573614]]],
         [[[-105.64862906428391, 44.15592489557819],
           [-105.64862906428391, 44.11699416976389],
           [-105.55318533869797, 44.11699416976389],
           [-105.55318533869797, 44.15592489557819]]]], null, false),
    cordero_rojo_ref = /* color: #00ff00 */ee.Geometry.MultiPolygon(
        [[[[-105.22919480521426, 44.02488587996746],
           [-105.22919480521426, 43.98438666916255],
           [-105.14130418021426, 43.98438666916255],
           [-105.14130418021426, 44.02488587996746]]],
         [[[-105.59517686087833, 44.02291095018131],
           [-105.59517686087833, 43.98685692478525],
           [-105.51758591849551, 43.98685692478525],
           [-105.51758591849551, 44.02291095018131]]],
         [[[-105.70704365874303, 44.01364221064614],
           [-105.70704365874303, 43.979064886289855],
           [-105.64387227202428, 43.979064886289855],
           [-105.64387227202428, 44.01364221064614]]]], null, false),
    coal_creek_ref = /* color: #0000ff */ee.Geometry.MultiPolygon(
        [[[[-105.61268632132754, 43.9574542160568],
           [-105.61268632132754, 43.92012394223181],
           [-105.53578202445254, 43.92012394223181],
           [-105.53578202445254, 43.9574542160568]]],
         [[[-105.71533982474551, 43.95102815714915],
           [-105.71533982474551, 43.91641435715116],
           [-105.63946549613223, 43.91641435715116],
           [-105.63946549613223, 43.95102815714915]]],
         [[[-105.8406526299213, 43.948556411004056],
           [-105.8406526299213, 43.909983861819455],
           [-105.7582551689838, 43.909983861819455],
           [-105.7582551689838, 43.948556411004056]]]], null, false),
    north_antelope_ref = /* color: #009999 */ee.Geometry.MultiPolygon(
        [[[[-105.88205962577626, 43.58532168791427],
           [-105.88205962577626, 43.532577312989986],
           [-105.75434356132314, 43.532577312989986],
           [-105.75434356132314, 43.58532168791427]]],
         [[[-106.01114898124501, 43.53855069189278],
           [-106.01114898124501, 43.484768980933275],
           [-105.90540557304189, 43.484768980933275],
           [-105.90540557304189, 43.53855069189278]]],
         [[[-104.99148040214345, 43.641995237881986],
           [-104.99148040214345, 43.58034777595327],
           [-104.85964446464345, 43.58034777595327],
           [-104.85964446464345, 43.641995237881986]]]], null, false),
    antelope_ref = /* color: #ff00ff */ee.Geometry.MultiPolygon(
        [[[[-105.19716388299202, 43.47399687013027],
           [-105.19716388299202, 43.41467132817227],
           [-105.10103351189827, 43.41467132817227],
           [-105.10103351189827, 43.47399687013027]]],
         [[[-105.07150775506233, 43.48744918935349],
           [-105.07150775506233, 43.443095023758914],
           [-104.98705035760139, 43.443095023758914],
           [-104.98705035760139, 43.48744918935349]]],
         [[[-105.70528155877327, 43.42863551326035],
           [-105.70528155877327, 43.39272110145836],
           [-105.64005023553108, 43.39272110145836],
           [-105.64005023553108, 43.42863551326035]]]], null, false),
    dry_fork_ref = /* color: #ffc82d */ee.Geometry.MultiPolygon(
        [[[[-105.876016633451, 44.375205192268375],
           [-105.876016633451, 44.34722306315612],
           [-105.81902505630256, 44.34722306315612],
           [-105.81902505630256, 44.375205192268375]]],
         [[[-105.20310403579475, 44.39630567377601],
           [-105.20310403579475, 44.362933973997066],
           [-105.13787271255256, 44.362933973997066],
           [-105.13787271255256, 44.39630567377601]]],
         [[[-105.96802713149788, 44.35115118575374],
           [-105.96802713149788, 44.316771187033886],
           [-105.89936258071663, 44.316771187033886],
           [-105.89936258071663, 44.35115118575374]]]], null, false),
    black_thunder_ref = /* color: #999900 */ee.Geometry.MultiPolygon(
        [[[[-105.77881156752261, 43.77712423429401],
           [-105.77881156752261, 43.71760066262723],
           [-105.65521537611636, 43.71760066262723],
           [-105.65521537611636, 43.77712423429401]]],
         [[[-105.93674003431948, 43.70072488956055],
           [-105.93674003431948, 43.64808168799744],
           [-105.82275688002261, 43.64808168799744],
           [-105.82275688002261, 43.70072488956055]]],
         [[[-104.76120292494448, 43.78604766467323],
           [-104.76120292494448, 43.734471684146264],
           [-104.65957938978823, 43.734471684146264],
           [-104.65957938978823, 43.78604766467323]]]], null, false);
           
// LandTrendr reference sites for mines //
var wyodak_refLT = /* color: #00ffff */ee.Geometry.Polygon(
        [[[-105.88104737781362, 44.32525263461307],
          [-105.88104737781362, 44.284959111089],
          [-105.79727662586049, 44.284959111089],
          [-105.79727662586049, 44.32525263461307]]], null, false),
    coal_creek_refLT = /* color: #0000ff */ee.Geometry.Polygon(
        [[[-105.8406526299213, 43.948556411004056],
          [-105.8406526299213, 43.909983861819455],
          [-105.7582551689838, 43.909983861819455],
          [-105.7582551689838, 43.948556411004056]]], null, false),
    north_antelope_refLT = /* color: #009999 */ee.Geometry.Polygon(
        [[[-104.99148040214345, 43.641995237881986],
          [-104.99148040214345, 43.58034777595327],
          [-104.85964446464345, 43.58034777595327],
          [-104.85964446464345, 43.641995237881986]]], null, false),
    dry_fork_refLT = /* color: #ffc82d */ee.Geometry.Polygon(
        [[[-105.96802713149788, 44.35115118575374],
          [-105.96802713149788, 44.316771187033886],
          [-105.89936258071663, 44.316771187033886],
          [-105.89936258071663, 44.35115118575374]]], null, false),
    buckskin_refLT = /* color: #d63000 */ee.Geometry.Polygon(
        [[[-105.63925232428903, 44.57684109112892],
          [-105.63925232428903, 44.540636107170265],
          [-105.54312195319528, 44.540636107170265],
          [-105.54312195319528, 44.57684109112892]]], null, false),
    rawhide_refLT = /* color: #98ff00 */ee.Geometry.Polygon(
        [[[-105.75186218757028, 44.43875009514393],
          [-105.75186218757028, 44.39951577735219],
          [-105.64749207038278, 44.39951577735219],
          [-105.64749207038278, 44.43875009514393]]], null, false),
    eagle_butte_refLT = /* color: #0b4a8b */ee.Geometry.Polygon(
        [[[-105.73697149030727, 44.3924549277999],
          [-105.73697149030727, 44.357117270030194],
          [-105.64908086530727, 44.357117270030194],
          [-105.64908086530727, 44.3924549277999]]], null, false),
    caballo_refLT = /* color: #bf04c2 */ee.Geometry.Polygon(
        [[[-105.90851319812612, 44.150119174384535],
          [-105.90851319812612, 44.10871954390727],
          [-105.76019776843862, 44.10871954390727],
          [-105.76019776843862, 44.150119174384535]]], null, false),
    antelope_refLT = /* color: #ff00ff */ee.Geometry.Polygon(
        [[[-105.19716388299202, 43.47399687013027],
          [-105.19716388299202, 43.41467132817227],
          [-105.10103351189827, 43.41467132817227],
          [-105.10103351189827, 43.47399687013027]]], null, false),
    black_thunder_refLT = /* color: #999900 */ee.Geometry.Polygon(
        [[[-105.77881156752261, 43.77712423429401],
          [-105.77881156752261, 43.71760066262723],
          [-105.65521537611636, 43.71760066262723],
          [-105.65521537611636, 43.77712423429401]]], null, false),
    belle_ayr_refLT = /* color: #ff0000 */ee.Geometry.Polygon(
        [[[-105.24350821467453, 44.089382160573614],
          [-105.24350821467453, 44.043004438797595],
          [-105.14875113459641, 44.043004438797595],
          [-105.14875113459641, 44.089382160573614]]], null, false),
    cordero_rojo_refLT = /* color: #00ff00 */ee.Geometry.Polygon(
        [[[-105.59517686087833, 44.02291095018131],
          [-105.59517686087833, 43.98685692478525],
          [-105.51758591849551, 43.98685692478525],
          [-105.51758591849551, 44.02291095018131]]], null, false);

// northern, central, southern reference sites (for reference only - defined in setAreaOfInterest function)//
// north = rawhide_refLT
// central = caballo_refLT
// south = north_antelope_refLT

//// palettes ////
var paletteNDVI = ['FFDEAD', '006400']; 
var paletteNDWI = ['FFE333' ,'3368FF'];
var palette = ['#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000'];
var palette_dis = ['#8000ff', '#B552A2', '#EF18C5', '#F21659'];
var palette_gain = ['#81f7e8', '#84ff00'];
var paletteTCG = [ 'FD0000', 'FF5605', 'F3E584', 'D4E960', '77B402', '4A7000'];
var paletteTCA = ["ffffff","00ffff","1593ff","3200ff"];
var paletteYOD = ["278540","45cc68","92f329","c6ffd5"];

//// visParams ////
var trueColor = {bands: ['red', 'green', 'blue'], min: 0, max: 3000, gamma: 1.4};
var NDVIvisParams = {bands: "NDVI", min: 0, max: 1, palette: paletteNDVI};
var NDWIvisParams = {bands: "NDWI", min: -1, max: 0.5, palette: paletteNDWI};
var magVizParms = {min: 200,  max: 800, palette: palette};
var TCGvisParams = {bands: 'greenness', min: -75, max: 805, palette: paletteTCG};
var TCAvisParams = {bands: 'TCA', min: -0.05, max: 0.2, palette: paletteTCA};
var imageVisParamDist = {"opacity":1,"bands":["mag","dur","preval"],"min":244.5826416015625,"max":2141.2437744140625,"gamma":4.25};
var imageVisParamGain = {"opacity":1,"bands":["dur","mag","preval"],"min":-95.04661006632779,"max":951.8092914664026,"gamma":4.25};

//// options for selecting area of interest ////
var BKS = 'Buckskin',
    RHD = 'Rawhide',
    EGB = 'Eagle Butte',
    DFK = 'Dry Fork',
    WYD = 'Wyodak',
    CBO = 'Caballo',
    BAR = 'Belle Ayr',
    CRO = 'Cordero Rojo',
    CLC = 'Coal Creek',
    BTH = 'Black Thunder',
    NAR = 'North Antelope-Rochelle',
    ANT = 'Antelope',
    ROI = 'General Study Area',
    NRS = 'Northern Reference Site',
    CRS = 'Central Reference Site',
    SRS = 'Southern Reference Site',
    // option to add your own geometry import
    OWN = 'Add your own asset',
    GEO = 'Draw your own asset';

//// configure the default view of the map and add county boundaries and mine boundaries ////
Map.setCenter(-105.32180806405063, 43.84125631883806, 9);
Map.addLayer(county, {color: "#006600"}, "Campbell County", false);
Map.addLayer(mines, {color: "#d295d6"}, "Active Mine Permit Boundaries", false);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////// Functions For Analysis ////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//// function to set area of interest ////

function setAreaOfInterest(aoi){
  var mineList = [ROI, BKS, RHD, EGB, DFK, WYD, CBO, BAR, CRO, CLC, BTH, NAR, ANT, NRS, CRS, SRS];
  var mineAssetList = [roi, buckskin, rawhide, eagle_butte, dry_fork, wyodak, caballo, belle_ayr, cordero_rojo, coal_creek, black_thunder, north_antelope_rochelle, antelope, rawhide_refLT, caballo_refLT, north_antelope_refLT];
  var areaInput;
  if (aoi === OWN) {
    var userInput = assetInputtxt.getValue();
    if (userInput) userInput = ee.String(userInput);
    var userSupplied = ee.FeatureCollection(userInput);
    areaInput = userSupplied.geometry(); // this converts a shapefile (FeatureCollection) uploaded by a user to a Geometry feature
  } else if (aoi === GEO) {
    areaInput = ee.FeatureCollection(geometry);
    } else {
    var index = mineList.indexOf(aoi); // Variables in mineList have the same index as their geometry asset in mineAssetList
    areaInput = ee.FeatureCollection(mineAssetList[index]); //Index mineAssetList to get geometry asset and convert to FeatureCollection
  }
  return areaInput;
}
  // if adding an additional own geometry:
  // add VARIABLE_NAME to the end of mineList and GEOMETRY_INPUT_NAME to the end of mineAssetList


//// function to set reference site area of interest ////

function setRefAreaOfInterest(aoi, lt){
  if (lt === undefined || lt === null){lt = false} // function selects the mine's LandTrendr reference site if lt = true (set to false by default)
  var mineList = [BKS, RHD, EGB, DFK, WYD, CBO, BAR, CRO, CLC, BTH, NAR, ANT, NRS, CRS, SRS];
  var refList = [buckskin_ref, rawhide_ref, eagle_butte_ref, dry_fork_ref, wyodak_ref, caballo_ref, belle_ayr_ref, cordero_rojo_ref, coal_creek_ref, black_thunder_ref, north_antelope_ref, antelope_ref, rawhide_refLT, caballo_refLT, north_antelope_refLT];
  var refLTlist = [buckskin_refLT, rawhide_refLT, eagle_butte_refLT, dry_fork_refLT, wyodak_refLT, caballo_refLT, belle_ayr_refLT, cordero_rojo_refLT, coal_creek_refLT, black_thunder_refLT, north_antelope_refLT, antelope_refLT, rawhide_refLT, caballo_refLT, north_antelope_refLT];
  var index = mineList.indexOf(aoi);
  var areaInput;
  if (lt === true) {
    areaInput = ee.FeatureCollection(refLTlist[index]);
  } else {
    areaInput = ee.FeatureCollection(refList[index]);
  }
  return areaInput;
}
  // If adding an additional own reference site geometry:
  //    add VARIABLE_NAME to the end of mineList and GEOMETRY_INPUT_NAME to the end of refList
  // You must add your own reference site to use the LandTrendr Disturbance/Reclamation Point Inspector
  

//// function to create image collection in GUI based on parameters selected ////

function createAnalysisIC(startYrInput, endYrInput, userselectarea){ //the function requires a start year (string), end year (string), and area (for clipping) inputs
//// Set area of interest. Runs the setAreaOfInterest function, using userselectarea as the input ////
    var areaInput = setAreaOfInterest(userselectarea);
    
    ////___ defining function to create image collection for time specified for landsat ___////
    function filterbyDateArea (startYrInput, endYrInput, areaInput){       
      var landsat8 = ee.ImageCollection("LANDSAT/LC08/C01/T1_SR");
      var landsat5 = ee.ImageCollection("LANDSAT/LT05/C01/T1_SR");
      var landsat7 = ee.ImageCollection('LANDSAT/LE07/C01/T1_SR');
      
      var srL5 = ee.ImageCollection(landsat5)
        .filterBounds(areaInput) ////filter images to only include those within the bounds of the areaInput
        .select(['B1','B2','B3','B4','B5','B7','B6'], ['blue', 'green', 'red',  'nir',  'swir1', 'swir2', 'temp']);
      
      var srL8 = ee.ImageCollection(landsat8)
        .filterBounds(areaInput)
        .select(['B1','B2','B3','B4','B5','B6','B7','B10'], ['ultra blue','blue', 'green', 'red', 'nir', 'swir1', 'swir2', 'temp']);
      
      var srL7 = ee.ImageCollection(landsat7)
        .filterDate('2012-01-01', '2012-12-31')
        .filterBounds(areaInput)
        .select(['B1','B2','B3','B4','B5','B7','B6'], ['blue', 'green', 'red',  'nir',  'swir1', 'swir2', 'temp']);
      
      var landsatmerged = ee.ImageCollection(srL8.merge(srL7.merge(srL5)));
      
      var filteredOutput = ee.ImageCollection(landsatmerged)
        .filterDate(ee.String(startYrInput).cat('-01-01'), ee.String(endYrInput).cat('-12-31')) //filters the collection to the start and end years specified by the user
        .filter(ee.Filter.calendarRange(6,8,'month')); // further filters the collection to only be images from June to August
      return filteredOutput; // returns an image collection of Landsat filtered to the area and years specified, June to August
    }

  ////run the function that creates the filtered image collection. This collection is called filteredCollection:
    var filteredCollection = filterbyDateArea(startYrInput, endYrInput, areaInput); 
    
    
    ////Defining functions to map onto the image collection////
    
    ////__ cloud score ___////
    // Compute a cloud-free composite with L8 by selecting the least-cloudy pixel from the collection.
    var cloudScoreLandsat = function(img) {
      
      // A helper to apply an expression and linearly rescale the output.
      var rescale = function(img, exp, thresholds) {
      return img.expression(exp, {img: img})
        .subtract(thresholds[0]).divide(thresholds[1] - thresholds[0]);
      };
      
      // Compute several indicators of cloudiness and take the minimum of them.
      var score = ee.Image(1.0);
      
      // Clouds are reasonably bright in the blue band.
      score = score.min(rescale(img, 'img.blue', [0.1, 0.3]));
      
      // Clouds are reasonably bright in all visible bands.
      score = score.min(rescale(img, 'img.red + img.green + img.blue', [0.2, 0.8]));
      
      // Clouds are reasonably bright in all infrared bands.
      score = score.min(
      rescale(img, 'img.nir + img.swir1 + img.swir2', [0.3, 0.8]));
      
      // Clouds are reasonably cool in temperature.
      score = score.min(rescale(img, 'img.temp', [300, 290]));
       
      // However, clouds are not snow.
      var ndsi = img.normalizedDifference(['green', 'swir1']);
      return score.min(rescale(ndsi, 'img', [0.8, 0.6]));
    };
    
    
     ////__ NDVI ___////
    var NDVI = function(img) {
      return img.addBands(img.normalizedDifference(['nir','red']).rename('NDVI'))}; // B4, B3 'nir','red'
    
    ////___ NDWI ___////
    var NDWI = function(img) {
      return img.addBands(img.normalizedDifference(['nir','swir1']).rename('NDWI'))}; //B4, B5 'nir','swir1'
    
    ////____TASSELED CAP TRANSFORMATION___ ////
    var TCT = function(img) {
      var coefficients = ee.Array([
        [0.2043, 0.4158, 0.5524, 0.5741, 0.3124, 0.2303],
        [-0.1603, 0.2819, -0.4934, 0.7940, -0.0002, -0.1446],
        [0.0315, 0.2021, 0.3102, 0.1594, -0.6806, -0.6109],
        [-0.8242, 0.0849, 0.4392, -0.0580, 0.2012, -0.2768],
        [-0.3280, 0.0549, 0.1075, 0.1855, -0.4357, 0.8085],
        [0.1084, -0.9022, 0.4120, 0.0573, -0.0251, 0.0238]
      ]);
      
      // Select bands and create 1D image array
      var img_1D = img
        .select(['blue', 'green', 'red', 'nir', 'swir1', 'swir2'])
        .toArray();
      
      // Convery 1D image array to a 2D 6x1 array per pixel
      var img_2D = img_1D.toArray(1);
      
      // Do matrix multiplication with the TCT coefficients: 6x6 times 6x1
      var componentsImg = ee.Image(coefficients)
        .matrixMultiply(img_2D)
        // Get rid of extra dimensions
        .arrayProject([0])
        .arrayFlatten(
          [['brightness', 'greenness', 'wetness', 'fourth', 'fifth', 'sixth']]);
          
      // Helper function to compute Tasseled Cap Angle from greenness and brightness
      var computeTCA = function(image){
        var frac = image.select('greenness').divide(image.select('brightness'));
        return frac.atan();
      };
      
      var imgWithTCTbands = img.addBands(componentsImg);
      return imgWithTCTbands.addBands(computeTCA(componentsImg).rename('TCA'));
    };

//// Create list of years that algorithm will be mapped on  ////
    var yearlist = ee.List.sequence(ee.Number.parse(startYrInput), ee.Number.parse(endYrInput));
    
    
    ////___ Define function which will map the aforementioned functions onto images for each year, creating an image collection ___////
    var mapStuff = function(year){ // this function will be mapped onto yearlist, so it takes each year in the list as the input
      var ICfilteredByYear = ee.ImageCollection(filteredCollection).filter(ee.Filter.calendarRange(year, year, 'year'));
      
      //// Clip all images in the collection to the area:
      var clippedCollection = ICfilteredByYear.map(function(image){return image.clip(areaInput)});
      
      //// Map spectral indices and cloudscore, apply quality mosaic to create one image with the least cloudy pixels    
      var mappedCollection = clippedCollection
        .map(NDVI)
        .map(NDWI)
        .map(TCT)
        .map(function(img) {
          // Invert the cloudscore so 1 is least cloudy, and rename the band.
          var score = cloudScoreLandsat(img.select(['blue', 'green', 'red',  'nir',  'swir1', 'temp', 'swir2',]));
          score = ee.Image(1).subtract(score).select([0], ['cloudscore']);
          return img.addBands(score);
        })
        .qualityMosaic('cloudscore');
    
      //// Apply the landclassification function to get image with land classification band values
      var endImage = NDVI(mappedCollection);
      
      var output = endImage 
        //// Set timestamp as January 1 of that year (format is in milliseconds since 1/1/1970) to make point change inspector graphs easier to read ////
        .set({'system:time_start': ee.Date.fromYMD(year, 1, 1).millis()})
        //// Set a property called "year" where the value = year of analysis. ////
        .set({'Year': year }) 
        .set({'Sensor': "Landsat"});
      return ee.Image(output);
    };
    

 //// Create imagecollection from mapping mapStuff() onto the yearlist ////
    var endCollection = ee.ImageCollection.fromImages(yearlist.map(mapStuff)); 
    return endCollection;
}

//################################################################################################################################
//                                                      LandTrendr                                                               #
//################################################################################################################################
// This script is informed by Braaten et al. 2018's LandTrendr script in Google Earth Engine. We have adapted the original tool to look at Greatest Disturbance and Fastest Gain to monitor surface mining.  
// original parameter definitions: https://emapr.github.io/LT-GEE/api.html#getchangemap
// original website: https://github.com/eMapR/LT-GEE

var startDay = '06-01';
var endDay = '08-31';
var maskThese = ['cloud', 'shadow', 'snow', 'water'];

//##########################################################################################
// END INPUTS
//##########################################################################################

// run landtrendr for disturbance
function LandTrendrDist (startYrInput, endYrInput, userselectarea, ref){
// set LandTrendr default to run on mining sites instead of reference sites
  if (ref === undefined || ref === null){ref = false}

// define landtrendr parameters
  var aoi; 
  if (ref === true) {
    aoi = setRefAreaOfInterest(userselectarea);   // runs LandTrendr on reference site instead of mining site
  } else {aoi = setAreaOfInterest(userselectarea)}

  var runParams = { 
      maxSegments:            6, // Spectral Segments, changed from 6, refer to Kennedy et al. 2010 to visualize this, tested on 4, 5, 6 (for mines, we don't want to overfit)
      spikeThreshold:         0.9,  // Spike Threshold, changed from .9 (putting this at 1 means there is no dampening)
      vertexCountOvershoot:   3, // Vertex Count Overshoot, tested on 0 & 3 
      preventOneYearRecovery: true, // Boolean, default online false (for reclamation, we want multi-year?)
      recoveryThreshold:      0.25, // Recovery threshold, tested on 0.25, 0.5, 1 // if [1/recovery thresh] in years is faster, then seg disallowed (mines, .5 is probably good?)
      pvalThreshold:          0.05, // p-value threshold, if p-val exceeds this thresh, model is discarded and another one is fitted (og .05, might be too high)
      bestModelProportion:    0.75,  // best model proportion, model w most verticies that has a p-valye that is at most this proportion away from the model w lowest p-value (og .75)
      minObservationsNeeded:  6 // minimum observations needed, one obs reps one year in this time series
    };
    
    // define change parameters
  var changeParams = {
      delta:  'loss',
      sort:   'greatest',
      year:   {checked:true, start:1985, end:2018},
      mag:    {checked:true, value:200,  operator:'>'},
      dur:    {checked:true, value:5,    operator:'>'}, // change year span if you are doing short time periods 
      preval: {checked:false, value:100,  operator:'>'},
      mmu:    {checked:true, value:20},
    };
    
  var index = 'TCA';  // this is where you can change the index
  var ftvList = [index];
  // load the LandTrendr.js module
  var ltgee = require('users/emaprlab/public:Modules/LandTrendr.js'); // reference: Kennedy, R. E., Yang, Z., & Cohen, W. B. (2010). Detecting trends in forest disturbance and recovery using yearly Landsat time series: 1. LandTrendr—Temporal segmentation algorithms. Remote Sensing of Environment, 114(12), 2897-2910.  //                                                                      https://github.com/eMapR/LT-GEE
  // add index to changeParams object for disturbance
  changeParams.index = index;
  var lt = ltgee.runLT(startYrInput, endYrInput, startDay, endDay, aoi, index, [], runParams, maskThese);
  // get the change map layer
  var changeImg = ltgee.getChangeMap(lt, changeParams);
  // clipping layer to be around aoi
  var clipLayer = changeImg.clip(aoi);
// return the change image
var yodVizParms = {min: startYrInput,  max: endYrInput, palette: palette}; // adding vis for year of detection
var lt_return = [clipLayer, yodVizParms, 'Disturbance'];
//return array of outputs
return lt_return;  
}

 // Reclamation LT
function LandTrendrGain(startYrInput, endYrInput, userselectarea, ref){
// set LandTrendr default to run on mining sites, not reference sites
  if (ref === undefined || ref === null){ref = false}
  
// define landtrendr parameters
  var aoi; 
  if (ref === true) {
    aoi = setRefAreaOfInterest(userselectarea);   // runs LandTrendr on reference site instead of mining site
  } else {aoi = setAreaOfInterest(userselectarea)}
  
// define change params
  var runParams = { 
      maxSegments:            6, // Spectral Segments, changed from 6, refer to Kennedy et al. 2010 to visualize this, tested on 4, 5, 6 (for mines, we don't want to overfit)
      spikeThreshold:         0.9,  // Spike Threshold, changed from .9 (putting this at 1 means there is no dampening)
      vertexCountOvershoot:   3, // Vertex Count Overshoot, tested on 0 & 3 
      preventOneYearRecovery: true, // Boolean, default online false (for reclamation, we want multi-year?)
      recoveryThreshold:      0.25, // Recovery threshold, tested on 0.25, 0.5, 1 // if [1/recovery thresh] in years is faster, then seg disallowed (mines, .5 is probably good?)
      pvalThreshold:          0.05, // p-value threshold, if p-val exceeds this thresh, model is discarded and another one is fitted (og .05, might be too high)
      bestModelProportion:    0.75,  // best model proportion, model w most verticies that has a p-valye that is at most this proportion away from the model w lowest p-value (og .75)
      minObservationsNeeded:  6 // minimum observations needed, one obs reps one year in this time series
    };

  var changeParams = {
      delta:  'gain',
      sort:   'fastest',
      year:   {checked:true, start:1985, end:2018},
      mag:    {checked:true, value:600,  operator:'>'},
      dur:    {checked:true, value:5,    operator:'>'}, // change year span if you are doing short time periods 
      preval: {checked:false, value:100,  operator:'>'},
      mmu:    {checked:true, value:11},
    };
  
  var index = 'TCA';  // this is where you can change the index
  var ftvList = [index];  

  changeParams.index = index;
// LandTrendr Library   
    var ltgee = require('users/emaprlab/public:Modules/LandTrendr.js'); // reference: Kennedy, R. E., Yang, Z., & Cohen, W. B. (2010). Detecting trends in forest disturbance and recovery using yearly Landsat time series: 1. LandTrendr—Temporal segmentation algorithms. Remote Sensing of Environment, 114(12), 2897-2910.  
                                                                      //https://github.com/eMapR/LT-GEE
// run landtrendr for reclamation
  var lt = ltgee.runLT(startYrInput, endYrInput, startDay, endDay, aoi, index, [], runParams, maskThese);
// get the change map layers
  var changeImg = ltgee.getChangeMap(lt, changeParams);
// return the change image
  var clipLayer = changeImg.clip(aoi);

// return the change image
var yodVizParms = {min: startYrInput,  max: endYrInput, palette: palette}; // adding vis for year of detection
var lt_return = [clipLayer, yodVizParms, 'Reclamation'];
//return array of outputs
return lt_return; 
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////USER INTERFACE//////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//// style templates ////
var reminderTxtStyle = {fontSize: '12px', color: 'gray', margin: '0 0 0 10px'};
var borderStyle = '3px double #07827e';
var optionsTitleStyle = {fontSize: '18px', fontWeight: 'bold', textAlign: 'center', color: '#07827e'};
var warningLabelStyle = {color: "#EB7B59", fontSize: '14px'};


//// define labels ////
var AllLabels = { 
  title: ['Coal Mining Assessment Tool (CMAT)'],
  intro: [
    'Filter, analyze, and export images from Landsat 5, Landsat 7, and Landsat 8 to view changes in the Powder River Basin. First, select a range of years and area to analyze. The tool generates one image for every year, taking the least cloudy pixels from images from June through August. You then have the option to display images on the map, export images, or click a point on the map to view changes in values over time.'], 
  paramTitle: ['Parameters:'],
  startYrLabel: ['Start Year:'],
  endYrLabel: ['End Year:'],
  yearWarningMsg: [
    "Note: including the current year in analysis will only work if it is currently July or later."],
  assetInstr: [
    "To use your own area of analysis, click the 'Assets' tab on the top left corner. Then under the 'New' button select 'table upload' to upload a shapefile.  Once it's uploaded, click the asset, copy the table ID, and paste above."],
  geoInstr: [
    "To draw a geometry, hover on the 'Geometry Imports' tab (upper left, center screen) and click '+new Layer' at the bottom of the panel. Use the 'Draw a Rectangle' tool to make one polygon and keep it named 'geometry'. Re-run the tool in Google Earth Engine and then run analysis on your added geometry. Disregard these instructions if you have already completed the former steps."], 
  mapDisplayTitle: ['Display Images on the Map'],
  NDVIlegendTitle: ['NDVI Legend'],
  NDWIlegendTitle: ['NDWI Legend'],
  TCGlegendTitle: ['Tasseled Cap Greenness'],
  TCAlegendTitle:['Tasseled Cap Angle'],
  LandTrendrDisLegendTitle: ['LandTrendr Disturbance'], 
  LandTrendrGainLegendTitle: ['LandTrendr Revegetation (Reclamation)'],
  runbuttonLabel: ['Add Images to the Map'],
  resetbuttonLabel: ['Reset Map'],
  exportTitle: ['Export to Google Drive'],
  exportInstr1: [
    'Select an image type to export. Exports options for all years in the selected range for the selected area will be generated. Not available for multiple polygons (All Areas or Overall Study Region).'],
  exporterrormsg: ['An image type to export must be selected first.'],
  exportgeneralmsg: ['Unfortunately, the General Study Area image collection is too large to export as a video.'],
  exportLayerOptions: ['NDVI', 'NDWI', 'Tasseled Cap Greenness', 'Tasseled Cap Angle', 'All Bands (images)', 'True Color (video)', 'LandTrendr Disturbance, Magnitude (Image Only)', 'LandTrendr Distrubance, Duration  (Image Only)', 'LandTrendr Distrubance, Year of Detection (Image Only)', 'LandTrendr Reclamation, Magnitude (Image Only)', 'LandTrendr Reclamation, Duration  (Image Only)', 'LandTrendr Reclamation, Year of Detection (Image Only)'],
  ICimageExportButton: ['Export Images (GeoTIFF)'], 
  ICvideoExportButton: ['Export Image Collection as a video'],
  exportInstr2: [
    "Click the 'Tasks' tab in the upper right panel of this screen, and then click 'Run' to export the image."],
  PITitle: ['Point Change Inspector'],
  PIInstr:[
    'Select an analysis type, then click on the map to see how values for that point have changed over the selected range of years. Click within the selected area of analysis.'],
  PIselectLabel: ['Analysis Type:'],
  legendNLCDnames: ['Open water','Perennial ice/snow','Developed, open space','Developed, low intensity','Developed, medium intensity','Developed high intensity','Barren land (rock/sand/clay)','Deciduous forest','Evergreen forest','Mixed forest','Dwarf scrub','Shrub/scrub','Grassland/herbaceous','Sedge/herbaceous','Lichens','Moss','Pasture/hay','Cultivated crops','Woody wetlands','Emergent herbaceous wetlands'],
  AltDataname: ['Add Ancillary Datasets'], 
  addAltDataButton: ['Add Data to the Map'],
  mapinfopanelTitle: ['Just Added:'],
  LandTrendrWarning: ['Warning: '],
  LandTrendrMessage: [' Outputs may take several minutes to generate. Please be patient and do not pan or zoom the map until the outputs have fully generated.'],
  zonalPIwarning1: ['Please note that the following are zonal, rather than point-specific, statistics for the entire '],
  zonalPIwarning2: [' mine.']
} ;


//// side panel for intro ////
var IntroPanel = ui.Panel([
    ui.Label({
      value: AllLabels.title, //this will be a variable that changes based on language selection
      style: {fontWeight: 'bold', fontSize: '24px', margin: '10px 5px'}
    }),
    ui.Label({
      value: AllLabels.intro
    }),
]);

//// panel for setting analysis parameters ////

//// setting the time range ////
var startyearOptions = 1985; //sets earliest year for list of years generated in the dropdown menu
var now = Date.now();
var endyearOptions = ee.Number(ee.Date(now).get('year')); //set last year in the list as the current year

//// defining function that creates a list of years as strings ////
var createyearlist = function(){ 
    var numlist = ee.List.sequence(startyearOptions, endyearOptions, 1);
    var totext = numlist.getInfo().map(function(input){
      var a = input.toString();
      return a;
    });
    return totext;
};

////create the list of start and end years for the selection menus ////
var startyearlist = createyearlist();
var endyearlist = startyearlist.reverse();  

////label that appears when the current year is selected ////
var yearWarningMsg = ui.Label({value: AllLabels.yearWarningMsg, style: warningLabelStyle});

//// create the start and end year selection menus ////
var startyearselect = ui.Select({
  items: startyearlist,
  value: startyearOptions.toString(), //default is the earliest year in the list
  onChange: function(){
    if (startyearselect.getValue()==endyearlist[0] && endyearselect.getValue()!=endyearlist[0]){ //if the start year is selected as the current year and the end year is not
      DateSelectionPanel.widgets().set(1, yearWarningMsg); //then add yearWarningMsg to the panel
    } else if (endyearselect.getValue()!=endyearlist[0] && startyearselect.getValue()!=endyearlist[0]){ //if neither the start year nor the end year are selected as the current year
      DateSelectionPanel.widgets().remove(yearWarningMsg); //then remove yearWarningMsg from the panel
    }
    ////set values for the parameterreminder labels ////
    parametersreminder.widgets().get(1).setValue(startyearselect.getValue() + ", "); 
    parametersreminder2.widgets().get(1).setValue(startyearselect.getValue() + ", ");
  }
});

var endyearselect = ui.Select({ 
  items: endyearlist,
  value: endyearlist[1], // Default is set as one year before the current year.
  onChange: function(){
    if (endyearselect.getValue()==endyearlist[0] && startyearselect.getValue()!=endyearlist[0]){
      DateSelectionPanel.widgets().set(1,yearWarningMsg);
    } else if (endyearselect.getValue()!=endyearlist[0] && startyearselect.getValue()!=endyearlist[0]){
      DateSelectionPanel.widgets().remove(yearWarningMsg);
    } 
    parametersreminder.widgets().get(2).setValue(endyearselect.getValue() + ", ");
    parametersreminder2.widgets().get(2).setValue(endyearselect.getValue() + ", ");
  }
});


//// create panels to hold the year selection menus and labels ////
var yearselectionsPanel = ui.Panel({
  widgets: [
    /*0*/ ui.Label({value: AllLabels.startYrLabel, style: {fontWeight: "bold"} }),
    /*1*/ startyearselect,
    /*2*/ ui.Label({value: AllLabels.endYrLabel, style: {fontWeight: "bold"} }),
    /*3*/endyearselect,
    ],
  layout: ui.Panel.Layout.flow('horizontal', 'true'),
});

//// final panel for selectin dates of analysis ////
var DateSelectionPanel = ui.Panel({
  widgets: [
   /*0*/ yearselectionsPanel, 
   /*1*/ //warning message about choosing the current year goes here
    ],
  layout: ui.Panel.Layout.flow('vertical', 'true'),
});


//// setting the area of analysis -- to see what feature each variable corresponds to, go back to the beginning of the script ////

////area selection widget////
var areaselect = ui.Select({
  items: [BKS, RHD, EGB, DFK, WYD, CBO, BAR, CRO, CLC, BTH, NAR, ANT, ROI, NRS, CRS, SRS, OWN, GEO],
  value: ROI, 
  onChange: function(){
    if (areaselect.getValue()==OWN){
      AreaSelectionPanel.widgets().set(2, assetInputPanel); //textbox for entering your own asset appears if OWN is selected
    } else if (areaselect.getValue()!=OWN){
      AreaSelectionPanel.widgets().remove(assetInputPanel);
    } if (areaselect.getValue()==GEO){
      AreaSelectionPanel.widgets().set(2, geoInputPanel);
    } else if (areaselect.getValue()!=GEO){
      AreaSelectionPanel.widgets().remove(geoInputPanel);
    }
    parametersreminder.widgets().get(3).setValue(areaselect.getValue());
    parametersreminder2.widgets().get(3).setValue(areaselect.getValue());
  }
});

//// Checkbox panel to add Reference layers ////
// Create MultiPolygon of Northern, Central, and Southern Reference Sites
var ref_sites = ee.Geometry.MultiPolygon([rawhide_refLT, caballo_refLT, north_antelope_refLT]);
// Checkbox to turn reference site viewer on/off //
var ref_OnOff = ui.Checkbox({
  label: "View Reference Sites",
  value: false,
  style: {color: '#07827e'},
  onChange: function(){ 
    if (ref_OnOff.getValue()===true){ // If checkbox is checked, reference sites will be displayed
      Map.addLayer(ref_sites, {color: '#7E49FA'}, 'Reference Sites');
    }
    else { // If checkbox is unchecked and reference sites are displayed, they will be removed from the map
      var layers = Map.layers();
      var names = [];
      layers.forEach(function(lay){
        var layName = lay.getName();
        names.push(layName);
      });
      if (names.indexOf('Reference Sites') >= 0) {
        Map.remove(layers.get(names.indexOf('Reference Sites')));
      }
    }
    }
});

////panel for the area selection and label with horizontal flow ////

var areaPanelhoriz = ui.Panel({ 
  widgets: [
    /*0*/ ui.Label({value: "Area: ", style: {fontWeight: "bold"} }), 
    /*1*/ areaselect,
    /*2*/ ref_OnOff
    ],
  layout: ui.Panel.Layout.flow('horizontal', 'false'), 
});

//// textbox for entering your own asset ////
var assetInputtxt = ui.Textbox({
  placeholder: "user/[username]/[asset name]",
  style: {width: "390px", }
});

//// panel that holds the textbox and instructions for entering your own asset ////
var assetInputPanel = ui.Panel({ 
  widgets: [
    /*0*/assetInputtxt,
    /*1*/ui.Label(AllLabels.assetInstr)
    ]
});

var geoInputPanel = ui.Panel({ 
  widgets: [
    /*0*/ui.Label(AllLabels.geoInstr)
    ]
});

//// final panel for selecting area ////
var AreaSelectionPanel = ui.Panel({
  widgets: [
   /*0*/ areaPanelhoriz, 
   //*1*/ assetInputPanel, //added to the panel if OWN selected
   //*2*/ geoInputPanel, // added to the panel if GEO selected
    ],
});


/////// FINAL PARAMETERS PANEL /////////

var ParametersPanel = ui.Panel({
  widgets: [
    /*0*/ ui.Label({
      value: AllLabels.paramTitle,
      style: {fontSize: '18px', fontWeight: 'bold', textAlign: 'center'}, 
    }),
    /*1*/ DateSelectionPanel,
    /*2*/ AreaSelectionPanel,
    ]
  });


/// panels used in later sections to remind users of the parameters chosen ///

var parametersreminder = ui.Panel({
  widgets: [
    /*0*/ ui.Label({value: AllLabels.paramTitle, style: reminderTxtStyle }),
    /*1*/ ui.Label({value: startyearselect.getValue() + ",", style: reminderTxtStyle}), 
    /*2*/ ui.Label({value: endyearselect.getValue() +", ", style: reminderTxtStyle}),
    /*3*/ ui.Label({value: areaselect.getValue(), style: reminderTxtStyle})
    ],
  layout: ui.Panel.Layout.flow('horizontal', 'true'),
  style: {padding: '0px 0px 10px 10px'} // top right bottom left
});

var parametersreminder2 = ui.Panel({
  widgets: [
    /*0*/ ui.Label({value: AllLabels.paramTitle, style: reminderTxtStyle }),
    /*1*/ ui.Label({value: startyearselect.getValue() + ",", style: reminderTxtStyle}), 
    /*2*/ ui.Label({value: endyearselect.getValue() +", ", style: reminderTxtStyle}),
    /*3*/ ui.Label({value: areaselect.getValue(), style: reminderTxtStyle})
    ],
  layout: ui.Panel.Layout.flow('horizontal', 'true'),
  style: {padding: '0px 0px 10px 10px'} // top right bottom left
});



//// panel for displaying layers on map (index 3) ////
//// panel with checkboxes and legends (which are hidden on default) and buttons to add and remove layers to the map. ////
//// checking the box will result in the legends being added to the panel.
//// unchecking will result in the panel being removed, though it's a little buggy when removing and then adding back.

/// checkboxes for selecting layers to add ///

var TCcheckbox = ui.Checkbox({
  label: " True Color ",
  value: true
});

var NDVIcheckbox = ui.Checkbox({
  label: "NDVI",
  onChange: function(){
    if (NDVIcheckbox.getValue()===true){
     legendsPanel.widgets().set(8, NDVIlegend);}
     else{legendsPanel.widgets().remove(NDVIlegend)}
  },
  //value: true ////sets the checkbox as checked by default
});

var NDWIcheckbox = ui.Checkbox({
  label: "NDWI",
  onChange: function(){
    if (NDWIcheckbox.getValue()===true){
      legendsPanel.widgets().set(9, NDWIlegend);}
     else{legendsPanel.widgets().remove(NDWIlegend)}
  },
});

var TCGcheckbox = ui.Checkbox({
  label: 'Tasseled Cap Greenness',
  onChange: function(){
    if (TCGcheckbox.getValue()===true){
      legendsPanel.widgets().set(10, TCGlegend);}
      else{legendsPanel.widgets().remove(TCGlegend)}
  },
});

var TCAcheckbox = ui.Checkbox({
  label: 'Tasseled Cap Angle',
  onChange: function(){
    if (TCAcheckbox.getValue()===true){
      legendsPanel.widgets().set(11, TCAlegend);}
      else{legendsPanel.widgets().remove(TCAlegend)}
  },
});

var LandTrendrDischeckbox = ui.Checkbox({
  label: " LandTrendr Disturbance ",
  onChange: function(){
    if (LandTrendrDischeckbox.getValue()===true){
     legendsPanel.widgets().set(12, LandTrendrDisLegend);}
     else{legendsPanel.widgets().remove(LandTrendrDisLegend)} 
  },
});

var LandTrendrGaincheckbox = ui.Checkbox({
  label: " LandTrendr Reclamation ",
  onChange: function(){
    if (LandTrendrGaincheckbox.getValue()===true){
     legendsPanel.widgets().set(13, LandTrendrGainLegend);}
     else{legendsPanel.widgets().remove(LandTrendrGainLegend)} 
  },
});
////final panel holding all the checkboxes ////
var checkboxesPanel = ui.Panel({
   widgets:[
    /*0*/ TCcheckbox,
    /*1*/ NDVIcheckbox,
    /*2*/ NDWIcheckbox,
    /*3*/ TCGcheckbox,
    /*4*/ TCAcheckbox,
    /*5*/ LandTrendrDischeckbox,
    /*6*/ LandTrendrGaincheckbox,
    ]
});


/// defining function that creates and styles 1 row of the legend. ///

/// defines function that makes a color bar given a palette (used to make NDVI and NDWI color bars). used in the thumbnail params ///
function makeColorBar(palette) {
  return {
    bbox: [0, 0, 1, 0.1],
    dimensions: '100x25',
    format: 'png',
    min: 0,
    max: 1,
    palette: palette };
}

//// NDVI Legend ////

/// create the color bar for the legend ///

var NDVIcolorBar = ui.Thumbnail({
  image: ee.Image.pixelLonLat().select(0),
  params: makeColorBar(paletteNDVI),
  style: {stretch: 'horizontal', margin: '0px 8px', maxHeight: '25px'},
});

/// Create a panel with two numbers for the legend. ///

var NDVIlegendLabels = ui.Panel({
  widgets: [
    ui.Label('0', {margin: '4px 8px'}),
    ui.Label('1', {margin: '4px 342px'}),
  ],
  layout: ui.Panel.Layout.flow('horizontal')
});


////the final panel for showing the NDVI legend ////

var NDVIlegend = ui.Panel({
  widgets: [
    ui.Label({
      value: AllLabels.NDVIlegendTitle,
      style: {
        fontWeight: 'bold',
        fontSize: '14px',
        margin: '0 0 4px 0',
        padding: '0',
      }
    }),
    NDVIcolorBar,
    NDVIlegendLabels],
  style: {
    padding: '8px 15px'
  }
});

//// NDWI  Legend ////

/// create the color bar for the legend. ///

var NDWIcolorBar = ui.Thumbnail({
  image: ee.Image.pixelLonLat().select(0),
  params: makeColorBar(paletteNDWI),
  style: {stretch: 'horizontal', margin: '0px 8px', maxHeight: '25px'},
});

//// Create a panel with two numbers for the legend.////

var NDWIlegendLabels = ui.Panel({
  widgets: [
    ui.Label('-1', {margin: '4px 8px'}),
    ui.Label('0.5', {margin: '4px 325px'}),
    ],
  layout: ui.Panel.Layout.flow('horizontal')
});


////the final panel for showing the NDWI legend ////

var NDWIlegend = ui.Panel({
  widgets: [
    ui.Label({
      value: AllLabels.NDWIlegendTitle,
      style: {
        fontWeight: 'bold',
        fontSize: '14px',
        margin: '0 0 4px 0',
        padding: '0',
      }
    }),
    NDWIcolorBar,
    NDWIlegendLabels,
  ],
  style: {
    padding: '8px 15px'
  }
});

//// Tasseled Cap Greenness Legend ////

/// create the color bar for the legend. ///

var TCGcolorBar = ui.Thumbnail({
  image: ee.Image.pixelLonLat().select(0),
  params: makeColorBar(paletteTCG),                                    
  style: {stretch: 'horizontal', margin: '0px 8px', maxHeight: '25px'},
});

//// Create a panel with two numbers for the legend.////

var TCGlegendLabels = ui.Panel({                           
  widgets: [
    ui.Label('-75', {margin: '4px 8px'}),
    ui.Label('805', {margin: '4px 314px'}) 
    ],
  layout: ui.Panel.Layout.flow('horizontal'),
});


////the final panel for showing the TCG legend ////

var TCGlegend = ui.Panel({
  widgets: [
    ui.Label({
      value: AllLabels.TCGlegendTitle,
      style: {
        fontWeight: 'bold',
        fontSize: '14px',
        margin: '0 0 4px 0',
        padding: '0'
      }
    }),
    TCGcolorBar,
    TCGlegendLabels,
  ],
  style: {
    padding: '8px 15px'
  }
});

//// Tasseled Cap Angle Legend ////

/// create the color bar for the legend. ///

var TCAcolorBar = ui.Thumbnail({
  image: ee.Image.pixelLonLat().select(0),
  params: makeColorBar(paletteTCA),                                    
  style: {stretch: 'horizontal', margin: '0px 8px', maxHeight: '25px'},
});

//// Create a panel with two numbers for the legend.////

var TCAlegendLabels = ui.Panel({                           
  widgets: [
    ui.Label('-91', {margin: '4px 8px'}),
    ui.Label('907', {margin: '4px 314px'}),
    ],
  layout: ui.Panel.Layout.flow('horizontal')
});


////the final panel for showing the TCA legend ////

var TCAlegend = ui.Panel({
  widgets: [
    ui.Label({
      value: AllLabels.TCAlegendTitle,
      style: {
        fontWeight: 'bold',
        fontSize: '14px',
        margin: '0 0 4px 0',
        padding: '0'
      }
    }),
    TCAcolorBar,
    TCAlegendLabels,
  ],
  style: {
    padding: '8px 15px'
  }
});

// LandTrendr Disturbance Legend
var LandTrendrDisLegendLabels = ui.Panel({                           
  widgets: [
    ui.Label('lower', {margin: '4px 8px'}),
    ui.Label('higher', {margin: '4px 284px'}),
  ],
  layout: ui.Panel.Layout.flow('horizontal')
});

var LandTrendrcolorBarDis = ui.Thumbnail({
  image: ee.Image.pixelLonLat().select(0), 
  params: makeColorBar(palette_dis),
  style: {stretch: 'horizontal', margin: '0px 8px', maxHeight: '25px'},
});

var LandTrendrDisLegend = ui.Panel({
  widgets: [
    ui.Label({
      value: AllLabels.LandTrendrDisLegendTitle,
      style: {
        fontWeight: 'bold',
        fontSize: '14px',
        margin: '0 0 4px 0',
        padding: '0'
      }
    }),
    LandTrendrcolorBarDis,
    LandTrendrDisLegendLabels,
     ],
  style: {
    padding: '8px 15px'
  }
});


// LandTrendr Vegetation Gain Legend
var LandTrendrGainLegendLabels = ui.Panel({                           
  widgets: [
    ui.Label('lower', {margin: '4px 8px'}),
    ui.Label('higher', {margin: '4px 284px'}),
  ],
  layout: ui.Panel.Layout.flow('horizontal')
});

var LandTrendrcolorBar = ui.Thumbnail({
  image: ee.Image.pixelLonLat().select(0), 
  params: makeColorBar(palette_gain),
  style: {stretch: 'horizontal', margin: '0px 8px', maxHeight: '25px'},
});

var LandTrendrGainLegend = ui.Panel({
  widgets: [
    ui.Label({
      value: AllLabels.LandTrendrGainLegendTitle,
      style: {
        fontWeight: 'bold',
        fontSize: '14px',
        margin: '0 0 4px 0',
        padding: '0'
      }
    }),
    LandTrendrcolorBar,
    LandTrendrGainLegendLabels,
     ],
  style: {
    padding: '8px 15px'
  }
});


////final panel holding all the legends //// 
//it is an empty by panel by default, so the legends will only appear when the corresponding checkbox is checked
var legendsPanel = ui.Panel({
  widgets:[
  //*0*/ NDVIlegend,
  //*1*/ NDWIlegend,
  //*2*/ TCGlegend,
  //*3*/ TCAlegend,
  //*4*/ LandTrendrDisLegend,    
  //*5*/ LandTrendrGainLegend,    
  ]
});


//// panel with the buttons ////

/// first, define function that adds layers based on the checkboxes that are selected ///

function DisplayLayers(collection){
    var startYrInput = ee.Number.parse(startyearselect.getValue());
    var endYrInput = ee.Number.parse(endyearselect.getValue());
    ee.List.sequence(startYrInput,endYrInput,1).getInfo().map(function(year){                                   
      var image = ee.ImageCollection(collection).filterMetadata('Year', 'equals', year);
      if (TCcheckbox.getValue()===true){Map.addLayer(image, trueColor, areaselect.getValue() + " True Color " + year)}
      if (NDVIcheckbox.getValue()===true){Map.addLayer(image, NDVIvisParams, areaselect.getValue() + " NDVI " + year)}
      if (NDWIcheckbox.getValue()===true){Map.addLayer(image, NDWIvisParams, areaselect.getValue() + " NDWI " + year)}
      if (TCGcheckbox.getValue()===true){Map.addLayer(image, TCGvisParams, areaselect.getValue() + " Tasseled Cap Greenness " + year)}
      if (TCAcheckbox.getValue()===true){Map.addLayer(image, TCAvisParams, areaselect.getValue() + " Tasseled Cap Angle " + year)}
    });
    LandTrendrWarningPanel.clear();
    LandTrendrWarningPanel.style().set({width: '0px'});
  }
  
  function DisplayLandTrendrLossLayers(lt_return){
    var Lt_dis = lt_return[0];
    var yodVizParms = lt_return[1]; 
    if (LandTrendrDischeckbox.getValue()===true){Map.addLayer(Lt_dis, imageVisParamDist, areaselect.getValue() + " LandTrendr Disturbance ");
      LandTrendrWarningPanel.style().set({width: '915px'});
      LandTrendrWarningPanel.widgets().set(0, ui.Label({value: AllLabels.LandTrendrWarning + ' ', style: {margin: '0px', fontWeight: 'bold'}}));
      LandTrendrWarningPanel.widgets().set(1, ui.Label({value: AllLabels.LandTrendrMessage, style: {margin: '0px 5px 0px 5px'}}));
    }
  }
  
  function DisplayLandTrendrGainLayers(lt_return){
    var Lt_gain = lt_return[0];
    var yodVizParms = lt_return[1]; 
    if (LandTrendrGaincheckbox.getValue()===true){Map.addLayer(Lt_gain, imageVisParamGain, areaselect.getValue() + " LandTrendr Reclamation ");
      LandTrendrWarningPanel.style().set({width: '915px'});
      LandTrendrWarningPanel.widgets().set(0, ui.Label({value: AllLabels.LandTrendrWarning + ' ', style: {margin: '0px', fontWeight: 'bold'}}));
      LandTrendrWarningPanel.widgets().set(1, ui.Label({value: AllLabels.LandTrendrMessage, style: {margin: '0px 5px 0px 5px'}}));  
    }
  }

/// the actual button: ///

var runbutton = ui.Button({
   label: AllLabels.runbuttonLabel,
   style: {width: '390px', color: '#07827e', padding: '15px 5px 0px 5px'}, 
   onClick: function(){
     var areaInput = setAreaOfInterest(areaselect.getValue());
     Map.centerObject(areaInput);
     var FinalCollection = createAnalysisIC(startyearselect.getValue(), endyearselect.getValue(), areaselect.getValue());
     var LandTrendrRunDis = LandTrendrDist(startyearselect.getValue(), endyearselect.getValue(), areaselect.getValue());
     var LandTrendrRunGain = LandTrendrGain(startyearselect.getValue(), endyearselect.getValue(), areaselect.getValue());
    DisplayLayers(FinalCollection);
    DisplayLandTrendrLossLayers(LandTrendrRunDis); 
    DisplayLandTrendrGainLayers(LandTrendrRunGain);
     /// set width of the mapinfopanel and add text to the box ///
     mapinfopanel.style().set({width: '300px'});
     mapinfopanel.widgets().set(0,ui.Label({value: AllLabels.mapinfopanelTitle, style: {margin: "0px", fontWeight: "bold"}}));
     mapinfopanel.widgets().set(1,ui.Label({value: startyearselect.getValue() + "–" + endyearselect.getValue(), style: {margin: "0px"}}));
     mapinfopanel.widgets().set(2,ui.Label({value: areaselect.getValue(), style: {margin: "0px"}}));
   }
  });

var resetbutton = ui.Button({
    label: AllLabels.resetbuttonLabel, 
    style: {width: '390px', color: '#EB7B59', padding: '5px 5px 15px 5px',},
    onClick: function reset(){
      // remove all layers in the map, add in the county and acive mine boundary layers again, reset the mapinfopanel widget
      Map.layers().reset();
      Map.addLayer(county, {color: "#006600"}, "Campbell County", false);
      Map.addLayer(mines, {color: "#d295d6"}, "Active Mine Permit Boundaries", false);
      mapinfopanel.clear();
      mapinfopanel.style().set({width: '0px'});
      LandTrendrWarningPanel.clear();
      LandTrendrWarningPanel.style().set({width: '0px'});
    }
  });


// final panel that holds the buttons 
var buttonsPanel = ui.Panel({
  widgets: [
    runbutton,
    resetbutton,
    ]
});


// FINAL PANEL FOR DISPLAYING LAYERS ON MAP 
var MapDisplayPanel = ui.Panel({
  widgets:[
    /*0*/ ui.Label({
      value: AllLabels.mapDisplayTitle,
      style: optionsTitleStyle, 
    }),
    /*1*/ checkboxesPanel,
    /*2*/ legendsPanel, // even though it's empty by default, it must be added so the legends will show up
    /*3*/ buttonsPanel,
    ],
  style: {margin: '10px 0px 0px 0px', border: borderStyle},
});

//##############################################
// panel for exporting data (AllPanels index 4) 
//##############################################

// function for exporting images in an image collection

function exportImages(collection_I, band_I, filename_I){ 
   if (areaselect.getValue() == 'Add your own asset'){
      var file_own = filename_I.replace(/ /g,"_"); 
      var startYrInput_own = ee.Number.parse(startyearselect.getValue());
      var endYrInput_own = ee.Number.parse(endyearselect.getValue());
      var area_own = areaselect.getValue().replace(/ /g,"_");
      var areaGeo_own = setAreaOfInterest(areaselect.getValue());
      var areaGeo_shape_own = areaGeo_own.bounds();       
        ee.List.sequence(startYrInput_own,endYrInput_own,1).getInfo().map(function(year){                                           
          var filteredCollection = ee.ImageCollection(collection_I.select(band_I).filterMetadata('Year', 'equals', year));
          var yearlyImage = filteredCollection.mosaic();
          yearlyImage = yearlyImage.copyProperties(filteredCollection.first(), ['system:time_start', 'Year']);
          Export.image.toDrive({
            image: yearlyImage,
            description: area_own + "-" + file_own +  "-" + year, //generates the task/file name as 'Mine-type_of_index-Year'
            scale: 30, //meters per pixel
            maxPixels: 2e10, 
            region: areaGeo_shape_own //sets the bounds of the exported image to be the area of interest
          });
    });
   }
  else {
      var file = filename_I.replace(/ /g,"_"); 
      var startYrInput = ee.Number.parse(startyearselect.getValue());
      var endYrInput = ee.Number.parse(endyearselect.getValue());
      var area = areaselect.getValue().replace(/ /g,"_");
      var areaGeo = setAreaOfInterest(areaselect.getValue());
      var areaGeo_shape = areaGeo.geometry().bounds();        //if exporting own asset, remove the .geometry() for export to function
        ee.List.sequence(startYrInput,endYrInput,1).getInfo().map(function(year){                                           
          var filteredCollection = ee.ImageCollection(collection_I.select(band_I).filterMetadata('Year', 'equals', year));
          var yearlyImage = filteredCollection.mosaic();
          yearlyImage = yearlyImage.copyProperties(filteredCollection.first(), ['system:time_start', 'Year']);
          Export.image.toDrive({
            image: yearlyImage,
            description: area + "-" + file +  "-" + year, //generates the task/file name as 'Mine-type_of_index-Year'
            scale: 30, //meters per pixel
            maxPixels: 2e10, 
            region: areaGeo_shape //sets the bounds of the exported image to be the area of interest
          });
        });
}}


// function for exporting images in an image colelction for Landtrendr

// exporting mag LandTrendr outputs

function exportLandTrendr_mag(lt_return, filename_I){   // This is the LandTrendr Export function for LandTrendr Magnitude of change
 if (areaselect.getValue() == 'Add your own asset'){
      var years_own = startyearselect.getValue() + '-' + endyearselect.getValue();
      var area_own = areaselect.getValue().replace(/ /g,"_");
      var areaGeo_own = setAreaOfInterest(areaselect.getValue());
      var areaGeo_shape_own = areaGeo_own.bounds();
      var LT_own = lt_return[0];
      var type_own = lt_return[2];
      var mag_own = LT_own.select(['mag']);   
        Export.image.toDrive({
        image: mag_own,
        description: area_own + '_LandTrendr_'  + type_own + '_' + filename_I + "_" + years_own, //generates the task/file name as 'Mine_LandTrendr_Disturbance/Reclamation_Magnitude_StartYear-EndYear'
        scale: 30, //meters per pixel
        maxPixels: 2e10, 
        region: areaGeo_shape_own //sets the bounds of the exported image to be the area of interest
      });
    }
  else {
    var years = startyearselect.getValue() + '-' + endyearselect.getValue();
    var area = areaselect.getValue().replace(/ /g,"_"); 
    var areaGeo = setAreaOfInterest(areaselect.getValue());
    var areaGeo_shape = areaGeo.geometry().bounds();
    var LT = lt_return[0]; 
    var type = lt_return[2];
    var mag = LT.select(['mag']); 
     Export.image.toDrive({
          image: mag,
          description: area + '_LandTrendr_'  + type + '_' + filename_I + "_" + years, //generates the task/file name as 'Mine_LandTrendr_Disturbance/Reclamation_Magnitude_StartYear-EndYear'
          scale: 30, //meters per pixel
          maxPixels: 2e10, 
          region: areaGeo_shape //sets the bounds of the exported image to be the area of interest
        });
}}


// exporting dur LandTrendr outputs

function exportLandTrendr_dur(lt_return, filename_I){// This is the LandTrendr Export function for LandTrendr Duration of change
 if (areaselect.getValue() == 'Add your own asset'){
      var years_own = startyearselect.getValue() + '-' + endyearselect.getValue();
      var area_own = areaselect.getValue().replace(/ /g,"_");
      var areaGeo_own = setAreaOfInterest(areaselect.getValue());
      var areaGeo_shape_own = areaGeo_own.bounds();
      var LT_own = lt_return[0];
      var type_own = lt_return[2];
      var dur_own = LT_own.select(['dur']);   
        Export.image.toDrive({
        image: dur_own,
        description: area_own + '_LandTrendr_'  + type_own + '_' + filename_I + "_" + years_own, //generates the task/file name as 'Mine_LandTrendr_Disturbance/Reclamation_Magnitude_StartYear-EndYear'
        scale: 30, //meters per pixel
        maxPixels: 2e10, 
        region: areaGeo_shape_own //sets the bounds of the exported image to be the area of interest
      });
    }
  else {
    var years = startyearselect.getValue() + '-' + endyearselect.getValue();
    var area = areaselect.getValue().replace(/ /g,"_"); 
    var areaGeo = setAreaOfInterest(areaselect.getValue()); //if exporting own asset, remove the .geometry() for export to function
    var areaGeo_shape = areaGeo.geometry().bounds();
    var LT = lt_return[0]; 
    var dur = LT.select(['dur']);
    var type = lt_return[2];      
     Export.image.toDrive({
          image: dur,
          description: area + '_LandTrendr_'  + type + '_' + filename_I + "_" + years, //generates the task/file name as 'Mine_LandTrendr_Disturbance/Reclamation_Duration_StartYear-EndYear'
          scale: 30, //meters per pixel
          maxPixels: 2e10, 
          region: areaGeo_shape //sets the bounds of the exported image to be the area of interest
        });
}}

// exporting yod LandTrendr outputs

function exportLandTrendr_yod(lt_return, filename_I){  // This is the LandTrendr Export function for LandTrendr Year of Detection (of change)
 if (areaselect.getValue() == 'Add your own asset'){
      var years_own = startyearselect.getValue() + '-' + endyearselect.getValue();
      var area_own = areaselect.getValue().replace(/ /g,"_");
      var areaGeo_own = setAreaOfInterest(areaselect.getValue());
      var areaGeo_shape_own = areaGeo_own.bounds();
      var LT_own = lt_return[0];
      var type_own = lt_return[2];
      var yod_own = LT_own.select(['yod']);   
        Export.image.toDrive({
        image: yod_own,
        description: area_own + '_LandTrendr_'  + type_own + '_' + filename_I + "_" + years_own, //generates the task/file name as 'Mine_LandTrendr_Disturbance/Reclamation_Magnitude_StartYear-EndYear'
        scale: 30, //meters per pixel
        maxPixels: 2e10, 
        region: areaGeo_shape_own //sets the bounds of the exported image to be the area of interest
      });
    }
  else {
    var years = startyearselect.getValue() + '-' + endyearselect.getValue();
    var area = areaselect.getValue().replace(/ /g,"_"); 
    var areaGeo = setAreaOfInterest(areaselect.getValue());
    var areaGeo_shape = areaGeo.geometry().bounds(); //if exporting own asset, remove the .geometry() for export to function
    var LT = lt_return[0]; 
    var type = lt_return[2];
    var yod = LT.select(['yod']);
    Export.image.toDrive({
          image: yod,
          description: area + '_LandTrendr_'  + type + '_' + filename_I + "_" + years, //generates the task/file name as 'Mine_LandTrendr_Disturbance/Reclamation_Year_ofDetection(yod)_StartYear-EndYear'
          scale: 30, //meters per pixel
          maxPixels: 2e10, 
          region: areaGeo_shape //sets the bounds of the exported image to be the area of interest
        });
}}


/// function for exporting image collection as a video ///

function exportICvideo(collection_I, visParams_I, band_I, filename_I){
     if (areaselect.getValue() == 'Add your own asset'){
      var file_own = filename_I.replace(/ /g,"_"); 
      var startYrInput_own = ee.Number.parse(startyearselect.getValue());
      var endYrInput_own = ee.Number.parse(endyearselect.getValue());
      var area_own = areaselect.getValue().replace(/ /g,"_");
      var areaGeo_own = setAreaOfInterest(areaselect.getValue());
      var areaGeo_shape_own = areaGeo_own.bounds();       
      var visualizedCollection_own = collection_I.map(function(img){
      return ee.Image(img).visualize(visParams_I); //creates RGB images. Videos can only be exported for RGB images.
    });
      Export.video.toDrive({
          collection: visualizedCollection_own,
          description: 'OwnAsset' + "-" + file + "-" + startYrInput + "-" + endYrInput + "_video",             // this line needs to be edited bc 'areaname' doesn't work w spaces (edit)
          scale: 30, // meters per pixel
          maxPixels: 1e8, 
          dimensions: 420,
          region: areaGeo_shape_own
          });
    }
    else {
    var file = filename_I.replace(/ /g,"_"); 
    var startYrInput = startyearselect.getValue();
    var endYrInput = endyearselect.getValue();
    var areaname = areaselect.getValue().replace(/ /g,"_");
    var areaGeo = setAreaOfInterest(areaselect.getValue());
    var areaGeo_shape = areaGeo.geometry().bounds();  //if exporting own asset, remove the .geometry() for export to function
    var visualizedCollection = collection_I.map(function(img){
      return ee.Image(img).visualize(visParams_I); //creates RGB images. Videos can only be exported for RGB images.
    });
    Export.video.toDrive({
          collection: visualizedCollection,
          description: areaname + "-" + file + "-" + startYrInput + "-" + endYrInput + "_video",             // this line needs to be edited bc 'areaname' doesn't work w spaces (edit)
          scale: 30, // meters per pixel
          maxPixels: 1e8, 
          dimensions: 420,
          region: areaGeo_shape
        });
}}

/// widgets ///

/// menu to select the image type to export ///
var exportselect = ui.Select({
  items: AllLabels.exportLayerOptions,
  style: {width: '380px', margin: '15px 0px 10px 10px' },
  onChange: function(){ExportPanel.widgets().remove(exporterrormsg)},
  value: 'NDVI',
});

////////////////////////////////////////////////////// START HERE //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// Error Messages ////
// error message that appears when clicking the export button without having selected an image type to export //
var exporterrormsg = ui.Label({value: AllLabels.exporterrormsg, style: warningLabelStyle});
// error message when trying to export General Study Area as a video //
var exportGenError = ui.Label({value: AllLabels.exportgeneralmsg, style: warningLabelStyle});
/// label that appears and provides further instructions once user has clicked export button ///
var exportInstr2 = ui.Label(AllLabels.exportInstr2); 

//// button for exporting images ////
var ICimageExport = ui.Button({
  label: AllLabels.ICimageExportButton,
  style: {width: '390px', color: '#07827e', padding: '15px 5px 0px 5px',},
  onClick: function(){
    ExportPanel.widgets().remove(exportGenError);
    if (exportselect.getValue() === null){
      return ExportPanel.widgets().set(4, exporterrormsg);
      } 
    else{
      ExportPanel.widgets().remove(exportInstr2);
      var ExportCollection = createAnalysisIC(startyearselect.getValue(), endyearselect.getValue(), areaselect.getValue());
      var LandTrendrExportDis = LandTrendrDist(startyearselect.getValue(), endyearselect.getValue(), areaselect.getValue());
      var LandTrendrExportGain = LandTrendrGain(startyearselect.getValue(), endyearselect.getValue(), areaselect.getValue());
      if (exportselect.getValue() == 'NDVI'){return exportImages(ExportCollection, "NDVI", "NDVI"), ExportPanel.widgets().set(7, exportInstr2);}
      if (exportselect.getValue() == 'NDWI'){return exportImages(ExportCollection, "NDWI", "NDWI"),ExportPanel.widgets().set(7, exportInstr2);}
      if (exportselect.getValue() == 'Tasseled Cap Greenness'){return exportImages(ExportCollection, "greenness", "Tasseled Cap Greenness"),ExportPanel.widgets().set(7, exportInstr2);}
      if (exportselect.getValue() == 'Tasseled Cap Angle'){return exportImages(ExportCollection, "TCA", "Tasseled Cap Angle"),ExportPanel.widgets().set(7, exportInstr2);}
      if (exportselect.getValue() == 'All Bands (images)'){return exportImages(ExportCollection, ['blue', 'green', 'red', 'nir', 'swir1', 'swir2', 'temp'], 'All_Bands'),ExportPanel.widgets().set(7, exportInstr2);} 
      if (exportselect.getValue() == 'LandTrendr Disturbance, Magnitude (Image Only)'){return exportLandTrendr_mag(LandTrendrExportDis, 'Magnitude'),ExportPanel.widgets().set(7, exportInstr2);}
      if (exportselect.getValue() == 'LandTrendr Distrubance, Duration  (Image Only)'){return exportLandTrendr_dur(LandTrendrExportDis,  'Duration'),ExportPanel.widgets().set(7, exportInstr2);}
      if (exportselect.getValue() == 'LandTrendr Distrubance, Year of Detection (Image Only)'){return exportLandTrendr_yod(LandTrendrExportDis, 'Year_of_Detection'),ExportPanel.widgets().set(7, exportInstr2);}
      if (exportselect.getValue() == 'LandTrendr Reclamation, Magnitude (Image Only)'){return exportLandTrendr_mag(LandTrendrExportGain,  'Magnitude'),ExportPanel.widgets().set(7, exportInstr2);}
      if (exportselect.getValue() == 'LandTrendr Reclamation, Duration  (Image Only)'){return exportLandTrendr_dur(LandTrendrExportGain, 'Duration'),ExportPanel.widgets().set(7, exportInstr2);}
      if (exportselect.getValue() == 'LandTrendr Reclamation, Year of Detection (Image Only)'){return exportLandTrendr_yod(LandTrendrExportGain, 'Year_of_Detection'),ExportPanel.widgets().set(7, exportInstr2);}
    }
  }, 
});


/// button for exporting videos ///

var ICvideoExport = ui.Button({
  label: AllLabels.ICvideoExportButton,
  style: {width: '390px', color: '#07827e', padding: '5px 5px 15px 5px',},
  onClick: function(){
    ExportPanel.widgets().remove(exportGenError);
    if (exportselect.getValue() === null){
      ExportPanel.widgets().set(4, exporterrormsg);
    } else if (areaselect.getValue() == 'General Study Area'){
        ExportPanel.widgets().set(4, exportGenError);
      }
    //   else if (areaselect.getValue() == 'add your own asset'){
      
    // }
    else{
      ExportPanel.widgets().remove(exportInstr2);
      var ExportCollection = createAnalysisIC(startyearselect.getValue(), endyearselect.getValue(), areaselect.getValue());
      if (exportselect.getValue() == 'NDVI'){return exportICvideo(ExportCollection, NDVIvisParams, "NDVI", "NDVI"),ExportPanel.widgets().set(7, exportInstr2);} 
      if (exportselect.getValue() == 'NDWI'){return exportICvideo(ExportCollection, NDWIvisParams, "NDWI", "NDWI"),ExportPanel.widgets().set(7, exportInstr2);} 
      if (exportselect.getValue() == 'Tasseled Cap Greenness'){return exportICvideo(ExportCollection, TCGvisParams, "greenness", "Tasseled Cap Greenness"),ExportPanel.widgets().set(7, exportInstr2);}
      if (exportselect.getValue() == 'Tasseled Cap Angle'){return exportICvideo(ExportCollection, TCAvisParams,  "TCA", "Tasseled Cap Angle"),ExportPanel.widgets().set(7, exportInstr2);}
      if (exportselect.getValue() == 'True Color (video)'){return exportICvideo(ExportCollection, trueColor, "True Color", "True_Color"),ExportPanel.widgets().set(7, exportInstr2);} 
    }
  }, 
});


//// FINAL PANEL FOR EXPORTING IMAGES AND VIDEOS ////

var ExportPanel = ui.Panel({
  widgets: [
    /*0*/ ui.Label({
      value: AllLabels.exportTitle,
      style: optionsTitleStyle, 
    }),
    /*1*/ parametersreminder,
    /*2*/ ui.Label(AllLabels.exportInstr1),
    /*3*/ exportselect,
    /*4*/ ui.Panel(),      // placeholder for error message (exportGenError) 
    /*5*/ ICimageExport,
    /*6*/ ICvideoExport,
    /*7*/ ui.Panel(),       // placeholder for further instructions (exportInstr2,)
    ],
  layout: ui.Panel.Layout.flow('vertical', 'true'),
  style: {margin: '10px 0px 0px 0px', border: borderStyle}
});

//######################################################
// panel for point change inspector (AllPanels index 5) 
//######################################################

/// Create panel to hold lon/lat values. ///
var lon = ui.Label();
var lat = ui.Label();

var coordPanel = ui.Panel({
  widgets: [lon, lat,],
  layout: ui.Panel.Layout.flow('horizontal'),
});

/// functions to reduce the image to get info on the mean of the magnitude, duration, and year of disturbance/reclamation for LandTrendr ///
// Reduces LandTrendr output image based on the geometry //
var getMean = function(img, geom, z) {
  return img.reduceRegion({
    reducer: ee.Reducer.mean(),
    geometry: geom,
    scale: z,
    tileScale: 4
  }).getInfo();
};

// Sets custom reduction scale for each geometry //
var setScale = function(aoi, ref){
  if (ref === undefined || ref === null){ref = true} // Set ref = true if you are setting the scale for a reference site (sets mining site scales by default)
  var mineList = [BKS, RHD, EGB, DFK, WYD, CBO, BAR, CRO, CLC, BTH, NAR, ANT, ROI, NRS, CRS, SRS, OWN, GEO];
  var mineScaleList = [244, 150, 244, 244, 244, 244, 244, 244, 244, 244, 244, 244, null, 30, 30, 40, 244, 244]; // Scale for OWN and GEO assets set to 244 by default: change corresponding entry to desired scale if you want to change
  var refScaleList = [30, 30, 24, 30, 30, 30, 50, 25, 30, 40, 40, 30, null, 30, 30, 40, 30, 30]; // Scale for OWN and GEO reference sites set to 30 by default: change corresponding entry to desired scale if you want to change
  var index = mineList.indexOf(aoi);
  var scale;
  if (ref === true) {
    scale = refScaleList[index];
  } else {
    scale = mineScaleList[index];
  }
  return scale;
};


/// checkbox to turn the point change inspector on and off ///
var PI_OnOff = ui.Checkbox({
  label: "Turn On",
  style: {color: '#07827e'},
  onChange: function(){ 
    if (PI_OnOff.getValue()===true){ // If checkbox is checked, a chart is created after clicking the map
      Map.style().set('cursor', 'crosshair');
      Map.onClick(function(coords) {
        /// Update the lon/lat panel with values from the click event. ///
        lon.setValue('Lon: ' + coords.lon.toFixed(4));
        lat.setValue('Lat: ' + coords.lat.toFixed(4));
        
        /// Add a layer with a dot for the point clicked on. A new layer is added each time. ///
        var point = ee.FeatureCollection(ee.Geometry.Point(coords.lon, coords.lat));
        Map.addLayer(point.draw({color: '#6F20A8', pointRadius: 5}), {}, 'Location Analyzed by Change Inspector');
        
        /// Create the image collection and then a chart of the spectral index selected by user. ///
        var PICollection = createAnalysisIC(startyearselect.getValue(), endyearselect.getValue(), areaselect.getValue());
        var mag_mine;
        var mag_ref;
        var mag_ratio;
        var mag_rounded;
        var dur;
        var dur_rounded;
        var noLTgsa;
        var chartband;
        if (PIselect.getValue()=='NDVI'){chartband = 'NDVI';
        } else if (PIselect.getValue() == 'Tasseled Cap Greenness') {chartband = 'greenness';
        } else if (PIselect.getValue() == 'Tasseled Cap Angle') {chartband = 'TCA';
        } else if (PIselect.getValue() === 'LandTrendr Disturbance') {
            if (areaselect.getValue() === 'General Study Area') {
              noLTgsa = ["Unfortunately, LandTrendr disturbance values cannot be quantified over the General Study Area."]; 
            } else {
                var LTDistMine = LandTrendrDist(startyearselect.getValue(), endyearselect.getValue(), areaselect.getValue());
                var LTDistRef = LandTrendrDist(startyearselect.getValue(), endyearselect.getValue(), areaselect.getValue(), true);
                var LTdistImg_mine = ee.Image(LTDistMine[0]).select(['mag', 'dur']);
                var LTdistImg_ref = ee.Image(LTDistRef[0].select(['mag', 'dur']));
                var meanDistMine = getMean(LTdistImg_mine, setAreaOfInterest(areaselect.getValue()), setScale(areaselect.getValue(), false));
                var meanDistRef = getMean(LTdistImg_ref, setRefAreaOfInterest(areaselect.getValue(), true), setScale(areaselect.getValue()));
                mag_mine = meanDistMine[['mag']];
                mag_ref = meanDistRef[['mag']];
                mag_ratio = ee.Number(mag_mine).divide(ee.Number(mag_ref));
                mag_rounded = mag_ratio.multiply(100).round().divide(100); // Rounds to two decimals places
                dur = meanDistMine[['dur']];
                dur_rounded = Math.round(dur);
            }
        } else { 
            if (areaselect.getValue() === 'General Study Area') {
                noLTgsa = ["Unfortunately, LandTrendr reclamation values cannot be quantified over the General Study Area."];
            } else {
                var LTGainMine = LandTrendrGain(startyearselect.getValue(), endyearselect.getValue(), areaselect.getValue());
                var LTGainRef = LandTrendrGain(startyearselect.getValue(), endyearselect.getValue(), areaselect.getValue(), true);
                var LTgainImg_mine = ee.Image(LTGainMine[0]).select(['mag', 'dur']);
                var LTgainImg_ref = ee.Image(LTGainRef[0]).select(['mag', 'dur']);
                var meanGainMine = getMean(LTgainImg_mine, setAreaOfInterest(areaselect.getValue()), setScale(areaselect.getValue(), false));
                var meanGainRef = getMean(LTgainImg_ref, setRefAreaOfInterest(areaselect.getValue(), true), setScale(areaselect.getValue()));
                mag_mine = meanGainMine[['mag']];
                mag_ref = meanGainRef[['mag']];
                mag_ratio = ee.Number(mag_mine).divide(ee.Number(mag_ref));
                mag_rounded = mag_ratio.multiply(100).round().divide(100); // Rounds to two decimal places
                dur = meanGainMine[['dur']];
                dur_rounded = Math.round(dur);
            }
        }
        
        if ((PIselect.getValue() != 'LandTrendr Disturbance') && (PIselect.getValue() != 'LandTrendr Reclamation')) {
          var indexChart = ui.Chart.image.seriesByRegion({
            imageCollection: PICollection, 
            band: chartband, 
            regions: point,
            reducer: ee.Reducer.mean(), 
            scale: 244, 
            seriesProperty: 'year'
          });
          /// set the appearance of the chart ///
          indexChart.setOptions({
            title: PIselect.getValue() + " in " + coords.lon.toFixed(4) + ", " + coords.lat.toFixed(4) + " (" + areaselect.getValue() + "), " +  startyearselect.getValue() + "–" + endyearselect.getValue(),
            vAxis: {title: PIselect.getValue()},
            hAxis: {title: 'Date', format: ''}, 
            lineWidth: 1,
            pointSize: 3,
            colors: ['#6F20A8'],
          })
          .setSeriesNames([PIselect.getValue()]);
          /// chart set to PIPanel at index position 6 and remove previous LandTrendr results (if any)///
          PIPanel.widgets().remove(ltTitle);
          PIPanel.widgets().remove(magLabel);
          PIPanel.widgets().remove(durLabel);
          PIPanel.widgets().set(5, indexChart);
        
        } else {
          if (areaselect.getValue() === 'General Study Area') {
            var ltErrorLabel = ui.Label({value: ['Unfortunately, LandTrendr results cannot be quanitified for the General Study Area.'], style: warningLabelStyle});
            PIPanel.widgets().set(5, ltErrorLabel);
          } else {
          // Create labels to display print of the LandTrendr information //
          var zonalWarningLabel = ui.Label({value: [AllLabels.zonalPIwarning1 + areaselect.getValue() + AllLabels.zonalPIwarning2], style: warningLabelStyle});
          PIPanel.widgets().set(5, zonalWarningLabel);
          var ltInfoTitle = [PIselect.getValue() + " Results Summary"];
          var ltTitle = ui.Label({value: ltInfoTitle, style: {fontSize: '14px', fontWeight: 'bold', color: 'black', textAlign: 'center'}});
          PIPanel.widgets().set(6, ltTitle);
          var magInfo = ['Magnitude of Change Ratio: ' + mag_rounded.getInfo()];
          var magLabel = ui.Label({value: magInfo, style: {fontSize: '14px', margin: '2px 2px 8px 8px'}});
          PIPanel.widgets().set(7, magLabel);
          var durInfo = ['Duration of Change: ' + dur_rounded + " years"];
          var durLabel = ui.Label({value: durInfo, style: {fontSize: '14px', margin: '2px 2px 8px 8px'}});
          PIPanel.widgets().set(8, durLabel);
          }
        }
        });
      
    }
    else{ //if checkbox is not checked, clicks on the map are not listed for and the cursor is styled back to the default hand
      Map.unlisten(); 
      Map.style().set('cursor', 'hand');
    }
    },
});

/// menu for selecting what the chart should show ///
var PIselect = ui.Select({
  items: ['NDVI', 'NDWI', 'Tasseled Cap Greenness', 'Tasseled Cap Angle', 'LandTrendr Disturbance', 'LandTrendr Reclamation'],
  value: 'NDVI'
});

/// panel with the selection menu and a label ///
var PIselectPanel = ui.Panel({
  widgets: [
    /*0*/ ui.Label(AllLabels.PIselectLabel),
    /*1*/ PIselect],
  layout: ui.Panel.Layout.flow('horizontal'),
});


/// FINAL POINT CHANGE INSPECTOR PANEL ///
var PIPanel = ui.Panel({
  widgets: [
  /*0*/ui.Label({
    value: AllLabels.PITitle,
    style: optionsTitleStyle,
  }),
  /*1*/ parametersreminder2,
  /*2*/ui.Label(AllLabels.PIInstr),
  /*3*/PI_OnOff,
  /*4*/PIselectPanel,
  /*5*/coordPanel,
  /*6*/ //indexChart added here
  ],
  style: {margin: '10px 0px 0px 0px', border: borderStyle}
});


//#######################################
// Adding Ancillary Data
//#######################################

var NLCD2011 = 'National Land Cover - 2011',  
    NLCD2001 = 'National Land Cover - 2001', 
    WYusfs = 'US Forest Service Managment', 
    WYstate = 'State Resource Management Area',
    WYblm = 'Bureau of Land Management (DOI)',
    WYpark = 'National Park Service',
    SG_hab = 'Sage-Grouse Core Management Area';

var selectData = ui.Select({
  items: [NLCD2011, NLCD2001, WYusfs, WYstate, WYblm, WYpark, SG_hab], 
  placeholder: 'Select',
  style: {width: '260px', padding: '15px 5px 0px 5px'}, 
  value: 'National Land Cover - 2011',
});


var auxButton = ui.Panel([selectData, 
  ui.Button({label: AllLabels.addAltDataButton,
  style: {width: '390px', color: '#07827e', padding: '15px 5px 0px 5px'}, 
  onClick:function setAncillary(userselectarea){
    var dataset = selectData.getValue(); 
    var aoi = areaselect.getValue();
    var combinedPAD = ee.FeatureCollection('users/claudiaherbert/PADUS2_0Fee_WY').merge(ee.FeatureCollection('users/claudiaherbert/PADUS2_0Combined_MT'));
    var Viz = {min: 0.0, max: 95.0, palette: ['5475A8', 'ffffff', 'E8D1D1', 'E29E8C', 'ff0000', 'B50000', 'D2CDC0','85C77E', '38814E', 'D4E7B0', 'AF963C', 'DCCA8F', 'FDE9AA', 'D1D182','A3CC51', '82BA9E', 'FBF65D', 'CA9146', 'C8E6F8', '64B3D5']};
    if (dataset == NLCD2011){
      var layer11 = ee.Image('USGS/NLCD/NLCD2011').select('landcover');
      AuxPanel.widgets().set(3,NLCDlegend);
      Map.addLayer(layer11, Viz, 'National Land Cover - 2011');
    } // selects ancillary data as NLCD 2011 landcover
    else if (dataset == NLCD2001){
      var layer01 = ee.Image('USGS/NLCD/NLCD2001').select('landcover');
      AuxPanel.widgets().set(3,NLCDlegend01);
      Map.addLayer(layer01, Viz, 'National Land Cover - 2001');
    } // selects ancillary data as NLCD 2001 landcover
    else if (dataset == WYusfs){
     var layerWTFed = combinedPAD.filterMetadata('Mang_Name', 'equals', 'USFS');
     Map.addLayer(layerWTFed, {color: "#a2dba5"}, 'US Forest Service Managment'); 
    } // select ancillary data as National Public Lands
     else if (dataset == WYblm){
         var layerWTBLM = combinedPAD.filterMetadata('Mang_Name', 'equals', 'BLM'); 
        Map.addLayer(layerWTBLM, {color: "#dae38a"}, 'Bureau of Land Management'); 
    } // add BLM layer to map
    else if (dataset == WYpark){
         var layerWTpark = combinedPAD.filterMetadata('Mang_Name', 'equals', 'NPS'); 
        Map.addLayer(layerWTpark, {color: "#528052"}, 'National Park Service'); 
    } // add BLM layer to map
    else if (dataset == WYstate){
      var layerWTState = combinedPAD.filterMetadata('d_Des_Tp', 'equals','State Resource Management Area');
      Map.addLayer(layerWTState,  {color: '#e0bb36'}, "State Resource Management Area"); 
    } // select ancillary data as State Resources Management Area
    else if (dataset == SG_hab){
      var SG_core = ee.FeatureCollection('users/claudiaherbert/Sage_Grouse'); 
      Map.addLayer(SG_core, {color: "#c3e9eb"}, 'Sage-Grouse Core Management Area');
    } // add ancillary data for Sage-Grouse Management Areas
    // adding to the map info panel
    mapinfopanel.style().set({width: '300px'});
    mapinfopanel.widgets().set(0,ui.Label({value: AllLabels.mapinfopanelTitle, style: {margin: "0px", fontWeight: "bold"}}));
    mapinfopanel.widgets().set(7,ui.Label({value: selectData.getValue(), style: {margin: "0px"}}));
}})]); 



var resetButton = ui.Button({
    label: AllLabels.resetbuttonLabel, 
    style: {width: '390px', color: '#EB7B59', padding: '5px 5px 15px 5px',},
    onClick: function reset(){
      // remove all layers in the map, add in the county and acive mine boundary layers again, reset the mapinfopanel widget
      Map.layers().reset();      
      AuxPanel.widgets().remove(NLCDlegend);
      AuxPanel.widgets().remove(NLCDlegend01);
      Map.addLayer(county, {color: "#006600"}, "Campbell County", false);
      Map.addLayer(mines, {color: "#d295d6"}, "Active Mine Permit Boundaries", false);
      mapinfopanel.clear();
      mapinfopanel.style().set({width: '0px'});
    }
  });
  
// set position of panel
var NLCDlegend = ui.Panel({style: {position: 'bottom-left',padding: '8px 15px'}});
var NLCDlegend01 = ui.Panel({style: {position: 'bottom-left',padding: '8px 15px'}});
 
// Create legend title
var NLCDlegendTitle = ui.Label({
  value: 'National Land Cover Classes 2011',
  style: {
    fontWeight: 'bold',
    fontSize: '14px',
    margin: '0 0 4px 0',
    padding: '0'
    }
});

var NLCDlegendTitle01 = ui.Label({
  value: 'National Land Cover Classes 2001',
  style: {
    fontWeight: 'bold',
    fontSize: '14px',
    margin: '0 0 4px 0',
    padding: '0'
    }
});
 
// Add the title to the panel
NLCDlegend.add(NLCDlegendTitle); 
NLCDlegend01.add(NLCDlegendTitle01); 
 
// Creates and styles 1 row of the legend.
var makeRow = function(color, name) {
 
      // Create the label that is actually the colored box.
      var colorBox = ui.Label({
        style: {
          backgroundColor: '#' + color,
          // Use padding to give the box height and width.
          padding: '8px',
          margin: '0 0 4px 0'
        }
      });
 
      // Create the label filled with the description text.
      var description = ui.Label({
        value: name,
        style: {margin: '0 0 4px 6px'}
      });
 
      // return the panel
      return ui.Panel({
        widgets: [colorBox, description],
        layout: ui.Panel.Layout.Flow('horizontal')
      });
};
 
//  Palette with the colors
var VisNLCD = [
    '466b9f', 'd1def8', 'dec5c5', 'd99282', 'eb0000', 'ab0000', 'b3ac9f',
    '68ab5f', '1c5f2c', 'b5c58f', 'af963c', 'ccb879', 'dfdfc2', 'd1d182',
    'a3cc51', '82ba9e', 'dcd939', 'ab6c28', 'b8d9eb', '6c9fb8'
  ];
 
// Add color and and names
for (var i = 0; i < 20; i++) {
  NLCDlegend.add(makeRow(VisNLCD[i], AllLabels.legendNLCDnames[i]));
  }  
  
  for (var i = 0; i < 20; i++) {
  NLCDlegend01.add(makeRow(VisNLCD[i], AllLabels.legendNLCDnames[i]));
  }  


var AuxPanel = ui.Panel({
  widgets:[
    /*0*/ ui.Label({
      value: AllLabels.AltDataname,
      style: optionsTitleStyle, 
    }),
    /*0*/ auxButton,
    /*1*/ resetButton,
    // /*2*/ NLCDlegend // added if NLCD layer is added to the map
    // /*3*/ NLCDlegend01 // added if NLCD layer is added to the map
    ],
  style: {margin: '10px 0px 0px 0px', border: borderStyle},
});


//-------------------------------------------------------------------------------------------------------------------------------//
//----------------------------------------------adding all the panels together into one panel------------------------------------//  
//-------------------------------------------------------------------------------------------------------------------------------//

var AllPanels = ui.Panel({
  widgets: [
    /*0*/ IntroPanel,
    /*1*/ ParametersPanel, 
    /*2*/ MapDisplayPanel, 
    /*3*/ ExportPanel, 
    /*4*/ PIPanel, 
    /*5*/ AuxPanel,
    ],
  style: {width: '450px', padding: '8px'} // this is where you can change the width of the tool 
});

//insert this panel into the root panel (sidebar)
ui.root.insert(0,AllPanels);

// map info panel //
// empty panel called mapinfopanel placed in the bottom left of the map. 
// Holds information about the analysis run after clicking the Add Images to Map button.

var mapinfopanel = ui.Panel({
  style: {position: 'bottom-left'}
});

// LandTrendr warning panel //
// Temporary panel to warn users that the LandTrendr map layer takes time to load when disturbance or magnitude is selected to be displayed on the map //

var LandTrendrWarningPanel = ui.Panel({
  layout: ui.Panel.Layout.flow('horizontal'),
  style: {position: 'top-center'}
});

Map.add(mapinfopanel);
Map.add(LandTrendrWarningPanel);
