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
    { id: 16, name: 'Gomitas de Fruta', category: 'Dulceria', price: 20, image: '/Img/Products/Dulces/Gomitas-de-Fruta.webp' },
    { id: 17, name: 'Caramelos Surtidos', category: 'Dulceria', price: 78, image: '/Img/Products/Dulces/Caramelo-surtido.webp'},
    { id: 18, name: 'Paletas de Sabores', category: 'Dulceria', price: 35, image: '/Img/Products/Dulces/paletas_de_sabores.webp' },
    { id: 19, name: 'Dulces Picantes', category: 'Dulceria', price: 22, image: '/Img/Products/Dulces/Dulces_Picantes.webp' },
    { id: 20, name: 'Tamarindo Picante', category: 'Dulceria', price: 10, image: '/Img/Products/Dulces/Tamarindo-Picante.webp' },
    { id: 21, name: 'Pulparindo', category: 'Dulceria', price: 21, image: '/Img/Products/Dulces/Pulparindo.webp' },
    { id: 22, name: 'Mazapán', category: 'Dulceria', price: 23, image: '/img/dulce7.jpg' },
    { id: 23, name: 'Rollitos de Fruta', category: 'Dulceria', price: 17, image: '/img/dulce8.jpg' },
    { id: 24, name: 'Chicles', category: 'Dulceria', price: 10, image: '/img/dulce9.jpg' },
    { id: 25, name: 'Dulces de Leche', category: 'Dulceria', price: 25, image: '/img/dulce10.jpg' },
    { id: 26, name: 'Dulces Ácidos', category: 'Dulceria', price: 18, image: '/img/dulce11.jpg' },
    { id: 27, name: 'Pastillas de Menta', category: 'Dulceria', price: 14, image: '/img/dulce12.jpg' },
    { id: 28, name: 'Caramelos Rellenos', category: 'Dulceria', price: 19, image: '/img/dulce13.jpg' },
    { id: 29, name: 'Gomitas Ácidas', category: 'Dulceria', price: 20, image: '/img/dulce14.jpg' },
    { id: 30, name: 'Duvalín', category: 'Dulceria', price: 12, image: '/img/dulce15.jpg' },

    // Postres
    { id: 31, name: 'Cheesecake', category: 'Postres', price: 85, image: '/img/postre1.jpg' },
    { id: 32, name: 'Pastel de Chocolate', category: 'Postres', price: 90, image: '/img/postre2.jpg' },
    { id: 33, name: 'Brownie', category: 'Postres', price: 60, image: '/img/postre3.jpg' },
    { id: 34, name: 'Flan Napolitano', category: 'Postres', price: 50, image: '/img/postre4.jpg' },
    { id: 35, name: 'Gelatina', category: 'Postres', price: 25, image: '/img/postre5.jpg' },
    { id: 36, name: 'Tiramisú', category: 'Postres', price: 70, image: '/img/postre6.jpg' },
    { id: 37, name: 'Pastel Tres Leches', category: 'Postres', price: 85, image: '/img/postre7.jpg' },
    { id: 38, name: 'Mousse de Chocolate', category: 'Postres', price: 68, image: '/img/postre8.jpg' },
    { id: 39, name: 'Tarta de Frutas', category: 'Postres', price: 72, image: '/img/postre9.jpg' },
    { id: 40, name: 'Cupcakes', category: 'Postres', price: 30, image: '/img/postre10.jpg' },
    { id: 41, name: 'Churros Rellenos', category: 'Postres', price: 40, image: '/img/postre11.jpg' },
    { id: 42, name: 'Galletas Decoradas', category: 'Postres', price: 35, image: '/img/postre12.jpg' },
    { id: 43, name: 'Helado Artesanal', category: 'Postres', price: 55, image: '/img/postre13.jpg' },
    { id: 44, name: 'Pastel de Zanahoria', category: 'Postres', price: 80, image: '/img/postre14.jpg' },
    { id: 45, name: 'Pay de Limón', category: 'Postres', price: 65, image: '/img/postre15.jpg' },

    // Panadería
    { id: 46, name: 'Concha', category: 'Panaderia', price: 12, image: '/img/pan1.jpg' },
    { id: 47, name: 'Cuernito', category: 'Panaderia', price: 15, image: '/img/pan2.jpg' },
    { id: 48, name: 'Pan de Muerto', category: 'Panaderia', price: 20, image: '/img/pan3.jpg' },
    { id: 49, name: 'Oreja', category: 'Panaderia', price: 14, image: '/img/pan4.jpg' },
    { id: 50, name: 'Bollito', category: 'Panaderia', price: 13, image: '/img/pan5.jpg' },
    { id: 51, name: 'Cocol', category: 'Panaderia', price: 16, image: '/img/pan6.jpg' },
    { id: 52, name: 'Bigote', category: 'Panaderia', price: 14, image: '/img/pan7.jpg' },
    { id: 53, name: 'Pan Danés', category: 'Panaderia', price: 18, image: '/img/pan8.jpg' },
    { id: 54, name: 'Trenza de Chocolate', category: 'Panaderia', price: 22, image: '/img/pan9.jpg' },
    { id: 55, name: 'Pan de Elote', category: 'Panaderia', price: 19, image: '/img/pan10.jpg' },
    { id: 56, name: 'Pan Integral', category: 'Panaderia', price: 17, image: '/img/pan11.jpg' },
    { id: 57, name: 'Empanada de Piña', category: 'Panaderia', price: 15, image: '/img/pan12.jpg' },
    { id: 58, name: 'Mantecadas', category: 'Panaderia', price: 16, image: '/img/pan13.jpg' },
    { id: 59, name: 'Pan de Queso', category: 'Panaderia', price: 20, image: '/img/pan14.jpg' },
    { id: 60, name: 'Panecillo Relleno', category: 'Panaderia', price: 21, image: '/img/pan15.jpg' },

    // Malvaviscos
    { id: 61, name: 'Malvaviscos Blancos', category: 'Malvaviscos', price: 18, image: '/img/malva1.jpg' },
    { id: 62, name: 'Malvaviscos Sabor Fresa', category: 'Malvaviscos', price: 20, image: '/img/malva2.jpg' },
    { id: 63, name: 'Malvaviscos Surtidos', category: 'Malvaviscos', price: 22, image: '/img/malva3.jpg' },
    { id: 64, name: 'Malvaviscos Cubiertos de Chocolate', category: 'Malvaviscos', price: 30, image: '/img/malva4.jpg' },
    { id: 65, name: 'Mini Malvaviscos', category: 'Malvaviscos', price: 15, image: '/img/malva5.jpg' },
    { id: 66, name: 'Malvaviscos en Forma de Corazón', category: 'Malvaviscos', price: 25, image: '/img/malva6.jpg' },
    { id: 67, name: 'Malvaviscos Tostados', category: 'Malvaviscos', price: 26, image: '/img/malva7.jpg' },
    { id: 68, name: 'Malvaviscos con Relleno', category: 'Malvaviscos', price: 28, image: '/img/malva8.jpg' },
    { id: 69, name: 'Malvaviscos de Colores', category: 'Malvaviscos', price: 19, image: '/img/malva9.jpg' },
    { id: 70, name: 'Malvaviscos en Forma de Estrella', category: 'Malvaviscos', price: 24, image: '/img/malva10.jpg' },
    { id: 71, name: 'Malvaviscos XL', category: 'Malvaviscos', price: 27, image: '/img/malva11.jpg' },
    { id: 72, name: 'Malvaviscos Decorativos', category: 'Malvaviscos', price: 22, image: '/img/malva12.jpg' },
    { id: 73, name: 'Malvaviscos Gigantes', category: 'Malvaviscos', price: 29, image: '/img/malva13.jpg' },
    { id: 74, name: 'Malvaviscos Cítricos', category: 'Malvaviscos', price: 21, image: '/img/malva14.jpg' },
    { id: 75, name: 'Malvaviscos Espolvoreados', category: 'Malvaviscos', price: 23, image: '/img/malva15.jpg' },
];

export default productsData