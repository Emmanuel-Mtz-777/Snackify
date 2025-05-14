const productsData = [
    // Chocolatería
  {
    id: 1,
    name: 'Chocolate Amargo',
    category: 'Chocolatería',
    price: 50,
    image: '/Img/Products/Chocolateria/Chocolate_Amargo.webp',
    description: 'Nuestro Chocolate Amargo es una delicia intensa elaborada con un alto porcentaje de cacao puro, ideal para los verdaderos amantes del chocolate. Su sabor profundo, con notas sutiles de frutos secos y una textura firme que se derrite lentamente en el paladar, lo convierte en la elección perfecta para quienes buscan una experiencia sensorial sofisticada y sin azúcares añadidos.'
  },
  {
    id: 2,
    name: 'Trufas Clásicas',
    category: 'Chocolatería',
    price: 60,
    image: '/Img/Products/Chocolateria/Trufas_Clasicas.webp',
    description: 'Las Trufas Clásicas son pequeñas obras maestras hechas a mano con una mezcla perfecta de ganache suave y cobertura de chocolate amargo espolvoreada con cacao en polvo. Cada bocado es una explosión de sabor cremoso y profundo, que ofrece una experiencia de lujo para los sentidos. Perfectas para regalar o para disfrutar en un momento de indulgencia personal.'
  },
  {
    id: 3,
    name: 'Tableta de Cacao 70%',
    category: 'Chocolatería',
    price: 45,
    image: '/Img/Products/Chocolateria/Tableta-de-Cacao.webp',
    description: 'La Tableta de Cacao 70% es un equilibrio perfecto entre amargor y dulzura, ideal para quienes buscan una experiencia auténtica del cacao. Con ingredientes seleccionados de origen sostenible, esta tableta es rica en antioxidantes, con un aroma profundo y una textura suave que se funde delicadamente en la boca.'
  },
  {
    id: 4,
    name: 'Chocolate con Almendras',
    category: 'Chocolatería',
    price: 55,
    image: '/Img/Products/Chocolateria/Chocolate-con-Almendras.webp',
    description: 'Disfruta de la combinación perfecta entre el sabor del chocolate oscuro y la textura crujiente de almendras tostadas. Esta barra está elaborada con ingredientes de alta calidad y ofrece un contraste delicioso que deleita a cualquier paladar. Un clásico que nunca falla.'
  },
  {
    id: 5,
    name: 'Barras Rellenas',
    category: 'Chocolatería',
    price: 48,
    image: '/Img/Products/Chocolateria/Barras Rellenas.webp',
    description: 'Nuestras Barras Rellenas son una experiencia multisensorial: una capa exterior de chocolate liso y brillante que envuelve un corazón suave y cremoso. Disponibles en una variedad de sabores como avellana, caramelo o fresa, son perfectas para quienes buscan algo más que una barra común.'
  },
  {
    id: 6,
    name: 'Chocolate Blanco',
    category: 'Chocolatería',
    price: 52,
    image: '/Img/Products/Chocolateria/Chocolate_Blanco.webp',
    description: 'El Chocolate Blanco es una delicia cremosa y suave, con un toque de vainilla natural que resalta su dulzura característica. Elaborado con manteca de cacao de alta pureza, este chocolate ofrece una textura sedosa ideal para los más golosos.'
  },
  {
    id: 7,
    name: 'Chocolate con Naranja',
    category: 'Chocolatería',
    price: 53,
    image: '/Img/Products/Chocolateria/Chocolate con naranja.webp',
    description: 'Esta barra combina el intenso sabor del chocolate oscuro con la frescura cítrica de la naranja. El resultado es un equilibrio elegante entre dulzura y acidez, ideal para quienes buscan una experiencia diferente y sofisticada en cada mordida.'
  },
  {
    id: 8,
    name: 'Chocolate con Menta',
    category: 'Chocolatería',
    price: 50,
    image: '/Img/Products/Chocolateria/Chocomenta.webp',
    description: 'Nuestro Chocolate con Menta ofrece una sensación refrescante única, combinando el profundo sabor del chocolate oscuro con la frescura natural de la menta. Perfecto como digestivo o simplemente para disfrutar de un gusto diferente que limpia el paladar.'
  },
  {
    id: 9,
    name: 'Chocolate Artesanal',
    category: 'Chocolatería',
    price: 70,
    image: '/Img/Products/Chocolateria/Chocolate Artesanal.webp',
    description: 'Elaborado a mano con técnicas tradicionales y cacao de origen ético, nuestro Chocolate Artesanal es una verdadera joya culinaria. Cada pieza refleja la pasión y el cuidado en su proceso, logrando un sabor único que no encontrarás en productos industriales.'
  },
  {
    id: 10,
    name: 'Bombones de Chocolate',
    category: 'Chocolatería',
    price: 62,
    image: '/Img/Products/Chocolateria/Bombones_de_Chocolate.webp',
    description: 'Estos bombones están rellenos con los más deliciosos sabores, desde frutas hasta licores, y cubiertos con una delicada capa de chocolate. Ideales para regalar o disfrutar en momentos especiales, su textura y sabor te conquistarán desde el primer bocado.'
  },
  {
    id: 11,
    name: 'Mini Trufas',
    category: 'Chocolatería',
    price: 40,
    image: '/Img/Products/Chocolateria/Mini_Trufas.webp',
    description: 'Pequeñas pero poderosas, nuestras Mini Trufas ofrecen el mismo sabor y suavidad de una trufa clásica, en un tamaño perfecto para disfrutar sin culpa. Ideales para compartir o como un detalle gourmet.'
  },
  {
    id: 12,
    name: 'Chocotejas',
    category: 'Chocolatería',
    price: 65,
    image: '/Img/Products/Chocolateria/Chocotejas.webp',
    description: 'Desde Perú traemos las auténticas Chocotejas: bombones artesanales rellenos de manjar blanco, frutas confitadas o nueces, cubiertos con una capa gruesa de chocolate oscuro. Una explosión de tradición y sabor en cada pieza.'
  },
  {
    id: 13,
    name: 'Chocolate con Fresa',
    category: 'Chocolatería',
    price: 58,
    image: '/Img/Products/Chocolateria/Chocolate_con_Fresa.webp',
    description: 'Nuestro Chocolate con Fresa combina el dulzor del chocolate con la acidez natural de las fresas liofilizadas. Es una fusión ideal para quienes aman los contrastes suaves y afrutados.'
  },
  {
    id: 14,
    name: 'Chocolate con Café',
    category: 'Chocolatería',
    price: 60,
    image: '/Img/Products/Chocolateria/Chocolate_con_Cafe.webp',
    description: 'Una combinación estimulante y deliciosa. El Chocolate con Café fusiona granos de café tostados con cacao de alta calidad, ofreciendo un sabor intenso, amargo y aromático que encantará a los más cafeteros.'
  },
  {
    id: 15,
    name: 'Chocolate con Pistache',
    category: 'Chocolatería',
    price: 63,
    image: '/Img/Products/Chocolateria/Chocolate_con_Pistache.webp',
    description: 'El sabor tostado y salado del pistache se une al dulzor del chocolate para crear una experiencia crujiente, equilibrada y adictiva. Ideal para los amantes de las nueces y de los sabores gourmet.'
  },

    // Dulces
{ id: 16, name: 'Gomitas de Fruta', category: 'Dulceria', price: 20, image: '/Img/Products/Dulces/Gomitas-de-Fruta.webp', description: 'Suaves, coloridas y con un sabor intenso, estas gomitas de fruta son perfectas para disfrutar en cualquier momento del día. Cada pieza está hecha con esencias frutales naturales que te harán sentir como si estuvieras mordiendo una fruta real. Son ideales para compartir, llevar en la mochila o tener en casa como botana.' },

{ id: 17, name: 'Caramelos Surtidos', category: 'Dulceria', price: 78, image: '/Img/Products/Dulces/Caramelo-surtido.webp', description: 'Una selección especial de caramelos de distintos sabores, texturas y colores, diseñada para satisfacer todos los gustos. Este surtido es ideal para fiestas, piñatas o para tener siempre un dulce a la mano. Incluye caramelos duros, suaves, frutales y cremosos, todos envueltos individualmente para mayor frescura.' },

{ id: 18, name: 'Paletas de Sabores', category: 'Dulceria', price: 35, image: '/Img/Products/Dulces/paletas_de_sabores.webp', description: 'Coloridas y sabrosas, estas paletas están disponibles en una gran variedad de sabores frutales que encantan tanto a niños como a adultos. Su tamaño las hace perfectas para disfrutar durante el camino a casa, después de comer o como un pequeño premio diario.' },

{ id: 19, name: 'Dulces Picantes', category: 'Dulceria', price: 22, image: '/Img/Products/Dulces/Dulces_Picantes.webp', description: 'Una deliciosa combinación de lo dulce y lo picosito. Estos dulces típicamente mexicanos son ideales para quienes disfrutan sabores intensos. Perfectos para botanear con amigos o para darle un giro picante a tu día.' },

{ id: 20, name: 'Tamarindo Picante', category: 'Dulceria', price: 10, image: '/Img/Products/Dulces/Tamarindo-Picante.webp', description: 'El clásico sabor del tamarindo mexicano combinado con chile en polvo, dando como resultado un dulce agridulce con un picor irresistible. Ideal para quienes disfrutan de sabores atrevidos y auténticos de la cocina mexicana.' },

{ id: 21, name: 'Pulparindo', category: 'Dulceria', price: 21, image: '/Img/Products/Dulces/Pulparindo.webp', description: 'Uno de los dulces más tradicionales de México. Hecho a base de pulpa de tamarindo, con un toque de sal, azúcar y chile. El Pulparindo es un favorito nacional por su combinación única de dulce, ácido y picante que crea una experiencia inolvidable en cada mordida.' },

{ id: 22, name: 'Mazapán', category: 'Dulceria', price: 23, image: '/Img/Products/Dulces/mazapan.webp', description: 'Dulce tradicional mexicano elaborado con cacahuate molido y azúcar. Su textura suave y quebradiza se derrite en la boca, dejando un sabor inconfundible que ha pasado de generación en generación. Perfecto para acompañar un café o como un pequeño antojo durante el día.' },

{ id: 23, name: 'Rollitos de Fruta', category: 'Dulceria', price: 17, image: '/Img/Products/Dulces/rollitos_de_fruta.webp', description: 'Estos rollitos de fruta están hechos con puré de frutas naturales, deshidratados y enrollados para una presentación divertida y práctica. Son una excelente opción como snack saludable o como alternativa a los dulces tradicionales. Sabores intensos con una textura masticable y deliciosa.' },

{ id: 24, name: 'Chicles', category: 'Dulceria', price: 10, image: '/Img/Products/Dulces/chicles.webp', description: 'Refresca tu aliento y diviértete con estos clásicos chicles de sabores frutales. Su textura suave y duradera los hace ideales para masticar mientras trabajas, estudias o simplemente quieres relajarte. Cada pieza viene envuelta para mantener su frescura por más tiempo.' },

{ id: 25, name: 'Dulces de Leche', category: 'Dulceria', price: 25, image: '/Img/Products/Dulces/dulce_de_leche.webp', description: 'Pequeñas porciones de dulce de leche suave y cremoso, con un sabor casero que recuerda a las recetas tradicionales. Son perfectos para acompañar una bebida caliente o como detalle dulce en una reunión familiar. Hechos con leche y azúcar, su sabor es reconfortante y delicioso.' },

{ id: 26, name: 'Dulces Ácidos', category: 'Dulceria', price: 18, image: '/Img/Products/Dulces/dulces-acidos.webp', description: 'Si te gustan los sabores intensos, estos dulces ácidos son para ti. Cada bocado es una explosión de sabor que hará que tus papilas gustativas se despierten al instante. Vienen en distintos colores y sabores, ideales para los que disfrutan lo atrevido.' },

{ id: 27, name: 'Pastillas de Menta', category: 'Dulceria', price: 14, image: '/Img/Products/Dulces/dulces-menta.webp', description: 'Pastillas pequeñas y refrescantes con un intenso sabor a menta. Ideales para llevar en el bolsillo o en la bolsa y usarlas en cualquier momento del día para mantener el aliento fresco. También ayudan a aliviar la garganta seca y mejorar la digestión.' },

{ id: 28, name: 'Caramelos Rellenos', category: 'Dulceria', price: 19, image: '/Img/Products/Dulces/caramelos-relleno.webp', description: 'Caramelos con una capa exterior dura y un delicioso relleno suave en el centro. Al morderlos, te sorprenderá su interior cremoso con sabores dulces y afrutados. Perfectos para disfrutar lentamente o para consentir a los más pequeños de la casa.' },

{ id: 29, name: 'Gomitas Ácidas', category: 'Dulceria', price: 20, image: '/Img/Products/Dulces/gomitas-acidas.webp', description: 'Estas gomitas están recubiertas con azúcar ácida que despierta el paladar desde el primer bocado. Su interior suave y frutal contrasta perfectamente con el toque ácido de su exterior. Son irresistibles para quienes aman los sabores vibrantes.' },

{ id: 30, name: 'Duvalín', category: 'Dulceria', price: 12, image: '/Img/Products/Dulces/duvalin.webp', description: 'Clásico postre mexicano con sabores de fresa, vainilla y chocolate en una presentación cremosa y fácil de llevar. Incluye una pequeña palita para disfrutarlo directamente del envase. Ideal para los niños o para revivir la nostalgia de la infancia.' }
,

    // Postres
  {
    id: 31,
    name: 'Cheesecake',
    category: 'Postres',
    price: 85,
    image: '/Img/Products/Postres/Cheesecake.webp',
    description: 'Delicioso cheesecake con base de galleta crujiente y un suave relleno de queso crema, coronado con una capa de mermelada de frutas rojas. Perfecto para los amantes de los sabores cremosos y dulces.'
  },
  {
    id: 32,
    name: 'Pastel de Chocolate',
    category: 'Postres',
    price: 90,
    image: '/Img/Products/Postres/Pastel de chocolate.webp',
    description: 'Pastel húmedo y esponjoso elaborado con chocolate de alta calidad, cubierto con ganache y decorado con virutas de cacao. Una experiencia intensa para los fanáticos del chocolate.'
  },
  {
    id: 33,
    name: 'Brownie',
    category: 'Postres',
    price: 60,
    image: '/Img/Products/Postres/brownie.webp',
    description: 'Brownie denso y suave con una textura perfecta entre bizcocho y caramelo, con trozos de nuez y un profundo sabor a chocolate. Ideal para acompañar con helado o café.'
  },
  {
    id: 34,
    name: 'Flan Napolitano',
    category: 'Postres',
    price: 50,
    image: '/Img/Products/Postres/flannapolitano.webp',
    description: 'Tradicional flan napolitano con textura sedosa y un toque de vainilla, bañado en caramelo dorado. Un clásico que nunca pasa de moda y conquista a todos.'
  },
  {
    id: 35,
    name: 'Gelatina',
    category: 'Postres',
    price: 25,
    image: '/Img/Products/Postres/gelatina.webp',
    description: 'Refrescante gelatina de sabores frutales, ideal para los días calurosos. Su textura suave y su colorido la hacen irresistible para grandes y chicos.'
  },
  {
    id: 36,
    name: 'Tiramisú',
    category: 'Postres',
    price: 70,
    image: '/Img/Products/Postres/Tiramisu.webp',
    description: 'Clásico postre italiano hecho con capas de bizcocho empapado en café y licor, crema de mascarpone y cacao espolvoreado. Elegante y lleno de sabor.'
  },
  {
    id: 37,
    name: 'Pastel Tres Leches',
    category: 'Postres',
    price: 85,
    image: '/Img/Products/Postres/pastel_TRES_LECHES.webp',
    description: 'Bizcocho suave y esponjoso bañado en una mezcla de tres leches, cubierto con crema chantilly y frutas. Dulce, cremoso y completamente irresistible.'
  },
  {
    id: 38,
    name: 'Mousse de Chocolate',
    category: 'Postres',
    price: 68,
    image: '/Img/Products/Postres/El_mousse_de_chocolate.webp',
    description: 'Textura aireada y rica en chocolate amargo. Este mousse combina la suavidad con un sabor profundo, ideal para quienes buscan un postre ligero pero intenso.'
  },
  {
    id: 39,
    name: 'Tarta de Frutas',
    category: 'Postres',
    price: 72,
    image: '/Img/Products/Postres/TortaDeFrutas.webp',
    description: 'Base crujiente de masa sablé, crema pastelera suave y una colorida selección de frutas frescas. Un postre vistoso, fresco y natural.'
  },
  {
    id: 40,
    name: 'Cupcakes',
    category: 'Postres',
    price: 30,
    image: '/Img/Products/Postres/cupcake.webp',
    description: 'Mini pastelitos decorados con betún cremoso y toppings variados. Suaves, coloridos y perfectos para cualquier ocasión o celebración.'
  },
  {
    id: 41,
    name: 'Churros Rellenos',
    category: 'Postres',
    price: 40,
    image: '/Img/Products/Postres/churros-rellenos.webp',
    description: 'Crujientes por fuera y rellenos por dentro con dulce de leche o chocolate. Espolvoreados con azúcar y canela para un toque irresistible.'
  },
  {
    id: 42,
    name: 'Galletas Decoradas',
    category: 'Postres',
    price: 35,
    image: '/Img/Products/Postres/galletas-decoradas.webp',
    description: 'Galletas de mantequilla decoradas con glaseado de colores. Divertidas, creativas y perfectas para regalar o disfrutar como un antojo dulce.'
  },
  {
    id: 43,
    name: 'Helado Artesanal',
    category: 'Postres',
    price: 55,
    image: '/Img/Products/Postres/Helado Artesanal.webp',
    description: 'Helado cremoso preparado de forma artesanal, con ingredientes naturales y sabores únicos. Perfecto para refrescarse con calidad y sabor auténtico.'
  },
  {
    id: 44,
    name: 'Pastel de Zanahoria',
    category: 'Postres',
    price: 80,
    image: '/Img/Products/Postres/Pastel-De-Zanahoria.webp',
    description: 'Esponjoso pastel con zanahoria rallada, nueces y especias, cubierto con un glaseado de queso crema. Un equilibrio ideal entre dulzura y sabor casero.'
  },
  {
    id: 45,
    name: 'Pay de Limón',
    category: 'Postres',
    price: 65,
    image: '/Img/Products/Postres/PayDeLimon.webp',
    description: 'Base de galleta crocante con un relleno suave y ácido de limón, cubierto con merengue dorado. Refrescante, cremoso y perfecto para los que aman los sabores cítricos.'
  },

    // Panadería
{
  id: 46,
  name: 'Concha',
  category: 'Panaderia',
  price: 12,
  image: '/Img/Products/Panaderia/concha.webp',
  description: 'La concha es sin duda el pan dulce más representativo de la panadería mexicana. Su masa esponjosa y ligeramente dulce se combina con una cubierta crujiente y azucarada que puede ser de vainilla, chocolate o fresa. Este pan no solo es un desayuno tradicional, sino un ícono cultural que despierta recuerdos de la infancia, de tardes acompañadas con chocolate caliente, y de charlas familiares en la cocina. Cada mordida es una mezcla de textura y sabor que te hace sentir en casa.'
},
{
  id: 47,
  name: 'Cuernito',
  category: 'Panaderia',
  price: 15,
  image: '/Img/Products/Panaderia/cuernito.webp',
  description: 'El cuernito es un pan ligero, dorado y ligeramente dulce, cuya forma de media luna le da su nombre. Aunque puede parecer simple, su sabor suave y su textura esponjosa lo convierten en un favorito para acompañar café, leche o incluso relleno con jamón y queso. Su versatilidad lo hace ideal tanto para desayunos como para meriendas, y es el tipo de pan que siempre alegra ver en la mesa.'
},
{
  id: 48,
  name: 'Pan de Muerto',
  category: 'Panaderia',
  price: 20,
  image: '/Img/Products/Panaderia/pan-de-muerto.webp',
  description: 'Este pan es mucho más que un alimento: es una tradición viva que honra a los que ya no están. Su forma adornada con figuras que representan huesos, su aroma a azahar y su sabor dulce lo convierten en una experiencia sensorial única. Se prepara especialmente durante el Día de Muertos, y simboliza el ciclo de la vida y la muerte. Compartir un pan de muerto es compartir memoria, cariño y cultura.'
},
{
  id: 49,
  name: 'Oreja',
  category: 'Panaderia',
  price: 14,
  image: '/Img/Products/Panaderia/orejas.webp',
  description: 'Las orejas son un manjar crujiente de hojaldre caramelizado. Su forma de espiral y su textura ligera las hacen irresistibles al primer bocado. Están hechas con múltiples capas de masa que se hornean hasta quedar perfectamente doradas. Cada mordida es un equilibrio entre lo crocante y el dulzor del azúcar cristalizada. Un clásico para los amantes de los panes más ligeros y delicados.'
},
{
  id: 50,
  name: 'Bollito',
  category: 'Panaderia',
  price: 13,
  image: '/Img/Products/Panaderia/bolillo.webp',
  description: 'El bollito, o bolillo, es el pan salado por excelencia en la cocina mexicana. Con su corteza firme y crujiente y su interior suave y aireado, es el acompañante ideal para cualquier platillo. Desde una torta bien servida hasta un simple pan con frijoles, el bolillo es sinónimo de tradición, sabor cotidiano y versatilidad. Es ese pan que nunca falta en la mesa.'
},
{
  id: 51,
  name: 'Cocol',
  category: 'Panaderia',
  price: 16,
  image: '/Img/Products/Panaderia/cocol.webp',
  description: 'El cocol es un pan con historia. Su forma romboidal y su característico aroma a anís lo convierten en una pieza única dentro de la panadería mexicana. De miga firme pero sabrosa, el cocol suele acompañarse con nata, café o mermeladas caseras. Es el pan de las abuelas, de las ferias de pueblo, de los recuerdos de infancia. Su sabor conecta con lo más profundo de nuestras raíces.'
},
{
  id: 52,
  name: 'Bigote',
  category: 'Panaderia',
  price: 14,
  image: '/Img/Products/Panaderia/bigote2.webp',
  description: 'El pan bigote es un pan divertido a la vista y delicioso al gusto. Con una forma alargada que se asemeja a un gran mostacho, su masa suave y ligeramente dulce está cubierta por una capa azucarada que lo hace irresistible. Es ideal para los niños, pero también para quienes disfrutan de panes suaves con un toque dulce clásico.'
},
{
  id: 53,
  name: 'Pan Danés',
  category: 'Panaderia',
  price: 18,
  image: '/Img/Products/Panaderia/pan danes.webp',
  description: 'El pan danés es una pieza sofisticada dentro del repertorio panadero. Su masa hojaldrada y su relleno, ya sea de crema pastelera, frutas o chocolate, crean una combinación elegante y deliciosa. Es el pan que uno elige cuando quiere consentirse con algo especial, con una textura ligera y un sabor que se derrite en la boca. Ideal para un desayuno con estilo o una merienda de lujo.'
},
{
  id: 54,
  name: 'Trenza de Chocolate',
  category: 'Panaderia',
  price: 22,
  image: '/Img/Products/Panaderia/trenza de chocolate.webp',
  description: 'La trenza de chocolate es una verdadera obra de arte panadera. Su forma entrelazada no solo es estética, sino que permite que el sabor del chocolate se distribuya perfectamente entre la masa suave. Es un pan generoso, pensado para compartir, y cada rebanada ofrece un contraste entre el dulzor del chocolate y la suavidad del pan. Perfecto para una tarde entre amigos o como regalo especial.'
},
{
  id: 55,
  name: 'Pan de Elote',
  category: 'Panaderia',
  price: 19,
  image: '/Img/Products/Panaderia/pan de elote.webp',
  description: 'El pan de elote es una joya de la repostería tradicional. Hecho con granos de maíz natural, su textura es húmeda y su sabor ligeramente dulce y terroso. Es perfecto para quienes buscan un pan con un sabor más natural y auténtico. Servido caliente, con un poco de leche o café, es un verdadero apapacho al alma.'
},
{
  id: 56,
  name: 'Pan Integral',
  category: 'Panaderia',
  price: 17,
  image: '/Img/Products/Panaderia/panintegral2.webp',
  description: 'Este pan integral está hecho con harinas más completas, lo que le da un sabor más profundo y una textura más densa. Es la elección perfecta para quienes buscan una opción más saludable sin renunciar al sabor. Rico en fibra, con un toque rústico, es ideal para desayunos nutritivos o para preparar un buen sándwich lleno de energía.'
},
{
  id: 57,
  name: 'Empanada de Piña',
  category: 'Panaderia',
  price: 15,
  image: '/Img/Products/Panaderia/empanada de pina.webp',
  description: 'La empanada de piña es una explosión de sabor tropical envuelta en una suave masa. Su interior está lleno de un dulce relleno de piña natural, que equilibra perfectamente el dulzor sin empalagar. Es un pan alegre, jugoso y lleno de sabor que combina muy bien con un vaso de leche o una bebida fresca en los días calurosos.'
},
{
  id: 58,
  name: 'Mantecadas',
  category: 'Panaderia',
  price: 16,
  image: '/Img/Products/Panaderia/MANTECADAS2.webp',
  description: 'Las mantecadas son suaves como una nube y dulces como un abrazo. Su textura esponjosa y su delicado aroma a vainilla o mantequilla las hace irresistibles. Ya sea para acompañar una bebida caliente, llevar en la lonchera o regalar a alguien especial, las mantecadas siempre son una opción que reconforta.'
},
{
  id: 59,
  name: 'Pan de Queso',
  category: 'Panaderia',
  price: 20,
  image: '/Img/Products/Panaderia/pandequeso2.webp',
  description: 'El pan de queso combina la suavidad de un pan dulce con el sabor salado y cremoso del queso derretido. Es un pan que sorprende por su equilibrio de sabores y su interior fundente. Cada mordida revela un corazón de queso que se derrite en la boca, haciendo de este pan una experiencia deliciosa.'
},
{
  id: 60,
  name: 'Panecillo Relleno',
  category: 'Panaderia',
  price: 21,
  image: '/Img/Products/Panaderia/pan relleno.webp',
  description: 'Este panecillo esconde en su interior una sorpresa deliciosa. Su masa suave envuelve un relleno que puede variar entre chocolate, crema o frutas, brindando una experiencia rica y llena de sabor en cada mordida. Perfecto para quienes buscan un pan diferente, con un corazón dulce que se descubre solo al probarlo.'
}
,

    // Malvaviscos
   {
    id: 61,
    name: 'Malvaviscos Blancos',
    category: 'Malvaviscos',
    price: 18,
    image: '/Img/Products/Malvaviscos/malvaviscos_blancos.webp',
    description: 'Los Malvaviscos Blancos son el epítome del sabor clásico que ha acompañado a generaciones. Su textura suave y esponjosa los convierte en el complemento ideal para una infinidad de recetas, desde el tradicional chocolate caliente hasta postres gourmet como brownies, galletas o pasteles decorados. Elaborados con ingredientes de alta calidad, cada pieza se derrite suavemente en la boca, dejando un sabor dulce y reconfortante que evoca memorias de infancia y momentos felices en familia. Son perfectos para compartir en campamentos alrededor de una fogata, para fiestas infantiles, como topping en bebidas frías o calientes, o simplemente para disfrutar solos como un delicioso antojo diario.'
  },
  {
    id: 62,
    name: 'Malvaviscos Sabor Fresa',
    category: 'Malvaviscos',
    price: 20,
    image: '/Img/Products/Malvaviscos/malvaviscos_fresa.webp',
    description: 'Con un delicado aroma y un sabor intensamente frutal, los Malvaviscos Sabor Fresa ofrecen una experiencia gustativa que deleita todos los sentidos. Estos malvaviscos han sido cuidadosamente formulados para capturar la esencia natural de la fresa en cada bocado, ofreciendo una textura tierna que se deshace en la boca. Son ideales para decorar postres, cupcakes, y mesas de dulces, aportando un toque de color y sabor irresistible. Además, su vibrante presentación los convierte en una excelente opción para eventos temáticos, regalos personalizados, o simplemente para convertir un día común en una celebración de sabor.'
  },
  {
    id: 63,
    name: 'Malvaviscos Surtidos',
    category: 'Malvaviscos',
    price: 22,
    image: '/Img/Products/Malvaviscos/Malvaviscos_Surtidos.webp',
    description: 'Una verdadera fiesta de colores y sabores. Los Malvaviscos Surtidos son perfectos para quienes disfrutan de la variedad y la sorpresa en cada bocado. Esta presentación incluye malvaviscos de distintos sabores frutales como fresa, naranja, limón y vainilla, todos elaborados con una textura suave y una apariencia atractiva. Son ideales para reuniones, piñatas, mesas de dulces y celebraciones en general. También pueden ser utilizados en repostería creativa, ya que sus colores vivos y formas variadas los convierten en el ingrediente perfecto para añadir alegría y dulzura a cualquier creación culinaria.'
  },
  {
    id: 64,
    name: 'Malvaviscos Cubiertos de Chocolate',
    category: 'Malvaviscos',
    price: 30,
    image: '/Img/Products/Malvaviscos/Malvaviscos_Cubiertos.webp',
    description: 'La combinación perfecta entre la suavidad del malvavisco y la intensidad del chocolate. Cada pieza está cuidadosamente recubierta con una capa de chocolate de alta calidad que aporta una textura crujiente al primer mordisco, seguido del dulzor cremoso del malvavisco en el centro. Es el snack ideal para los amantes del chocolate que buscan algo diferente, sofisticado y placentero. Son una excelente opción para regalar, presentar en eventos elegantes, complementar una tabla de postres o simplemente para consentirte en cualquier momento del día. Un verdadero deleite para los sentidos.'
  },
  {
    id: 65,
    name: 'Mini Malvaviscos',
    category: 'Malvaviscos',
    price: 15,
    image: '/Img/Products/Malvaviscos/malvaviscos_blancos.webp',
    description: 'Los Mini Malvaviscos son pequeños pero poderosos en sabor y versatilidad. Su diminuto tamaño los hace perfectos para decorar bebidas como capuchinos, frappés, o chocolate caliente, además de ser el ingrediente estrella en recetas como arroz inflado con malvaviscos, s’mores y bombones rellenos. Su textura es tan suave como los malvaviscos tradicionales, pero su forma práctica permite un mejor control al cocinar o decorar. Son la elección ideal para quienes buscan añadir un toque tierno y dulce a sus creaciones, y su presentación adorable también los convierte en favoritos para decorar mesas infantiles.'
  },
  {
    id: 66,
    name: 'Malvaviscos en Forma de Corazón',
    category: 'Malvaviscos',
    price: 25,
    image: '/Img/Products/Malvaviscos/Malvaviscos_corazon.webp',
    description: 'Inspirados en el amor y la dulzura, los Malvaviscos en Forma de Corazón son una opción encantadora para fechas especiales como San Valentín, aniversarios o cualquier ocasión en la que quieras expresar cariño. Con una textura esponjosa y un sabor delicado, estos malvaviscos no solo deleitan el paladar, sino que también llenan de ternura cualquier mesa. Son ideales para envolver como regalo, decorar cajas de dulces, incluir en desayunos sorpresa o usar en repostería romántica. Su atractivo visual los convierte en una pieza central que roba miradas y corazones por igual.'
  },
];

export default productsData