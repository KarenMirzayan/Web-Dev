export class Category {
    id: number;
    name: string;
    products: Product[];
    isOpen: boolean;
    constructor(id: number, name: string, products: Product[], isOpen: boolean) {
        this.id = id;
        this.name = name;
        this.products = products;
        this.isOpen = isOpen;
    }
}

export class Product {
    id: number;
    image: string;
    name: string;
    description: string;
    rating: number;
    link: string;
    likes: number;
    liked: boolean = false;

    constructor(id: number, image: string, name: string, description: string, rating: number, link: string, likes: number) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.description = description;
        this.rating = rating;
        this.link = link;
        this.likes = likes;
    }
}

export let legos: Product[] = [
    {
        id: 1,
        name: "LEGO Minifigures 71045",
        image: `https://resources.cdn-kaspi.kz/img/m/p/ha8/hef/84853874950174.jpg?format=gallery-medium`,
        description: "деталей 9 шт",
        rating: 5,
        link: "https://kaspi.kz/shop/p/lego-minifigures-71045-detalei-9-sht-115807160/?c=750000000",
        likes: 9,
        liked: false,
    },
    {
        id: 2,
        name: "LEGO Орхидея 10311",
        image: `https://resources.cdn-kaspi.kz/img/m/p/hbe/h9e/84799947472926.jpg?format=gallery-medium`,
        description: "деталей 608 шт",
        rating: 5,
        link: "https://kaspi.kz/shop/p/lego-orhideja-10311-detalei-608-sht-108749534/?c=750000000",
        likes: 19,
        liked: false,
    },
    {
        id: 3,
        name: "LEGO Грозовой самолёт Джея EVO 71784",
        image: `https://resources.cdn-kaspi.kz/img/m/p/h03/hba/84798666604574.jpg?format=gallery-medium`,
        description: "деталей 146 шт",
        rating: 5,
        link: "https://kaspi.kz/shop/p/lego-grozovoi-samoljot-dzheja-evo-71784-detalei-146-sht-108313049/?c=750000000",
        likes: 15,
        liked: false,
    },
    {
        id: 4,
        name: "LEGO Электрический автомобиль 60383",
        image: `https://resources.cdn-kaspi.kz/img/m/p/h36/h41/84799701450782.jpg?format=gallery-medium`,
        description: "деталей 95 шт",
        rating: 5,
        link: "https://kaspi.kz/shop/p/lego-elektricheskii-sportivnyi-avtomobil-60383-detalei-95-sht-108353513/?c=750000000",
        likes: 2,
        liked: false,
    },
    {
        id: 5,
        name: "LEGO Форсаж 2 Ниссан Скайл 76917",
        image: `https://resources.cdn-kaspi.kz/img/m/p/h10/hf6/84798670831646.jpg?format=gallery-medium`,
        description: "деталей 319 шт",
        rating: 5,
        link: "https://kaspi.kz/shop/p/lego-forsazh-2-nissan-skail-76917-detalei-319-sht-108313086/?c=750000000",
        likes: 30,
        liked: false,
    },
    
];
export let phones: Product[] = [
    {
        id: 1,
        name: "Смартфон Apple iPhone 13",
        image: `https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium`,
        description: "128Gb Midnight черный",
        rating: 5,
        link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000",
        likes: 1519,
        liked: false,
    },
    {
        id: 2,
        name: "Смартфон Apple iPhone 14 ",
        image: `https://resources.cdn-kaspi.kz/img/m/p/h98/h2b/64400497737758.jpg?format=gallery-medium`,
        description: "128Gb черный",
        rating: 5,
        link: "https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000",
        likes: 1132,
        liked: false,
    },
    {
        id: 3,
        name: "Смартфон Xiaomi Redmi 12 4G",
        image: `https://resources.cdn-kaspi.kz/img/m/p/h75/hbc/81335343775774.png?format=gallery-medium`,
        description: "8 ГБ/256 ГБ черный",
        rating: 5,
        link: "https://kaspi.kz/shop/p/xiaomi-redmi-12-4g-8-gb-256-gb-chernyi-110918152/?c=750000000",
        likes: 854,
        liked: false,
    },
    {
        id: 4,
        name:"Смартфон Samsung Galaxy A54 5G",
        image: `https://resources.cdn-kaspi.kz/img/m/p/h10/hf6/84798670831646.jpg?format=gallery-medium`,
        description: "8 ГБ/256 ГБ черный",
        rating: 5,
        link: "https://kaspi.kz/shop/p/samsung-galaxy-a54-5g-8-gb-256-gb-chernyi-110044379/?c=750000000",
        likes: 483,
        liked: false,
    },
    {
        id: 5,
        name: "Смартфон Apple iPhone 13",
        image: `https://resources.cdn-kaspi.kz/img/m/p/h16/h64/64000133005342.jpg?format=gallery-medium`,
        description: "128Gb розовый",
        rating: 5,
        link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-rozovyi-102298145/?c=750000000",
        likes: 766,
        liked: false,
    },
    
];
export let appliances: Product[] = [
    {
      id: 1,
      image: `https://resources.cdn-kaspi.kz/img/m/p/h78/he6/81315957440542.png?format=gallery-medium`,
      name: "SM-7700 серебристый",
      description: "Блендер",
      rating: 4.5,
      link: "https://kaspi.kz/shop/p/sm-7700-serebristyi-110902818/?c=750000000",
      likes: 5,
      liked: false,
    },
    {
      id: 2,
      image: `https://resources.cdn-kaspi.kz/img/m/p/h08/hde/80282292781086.jpg?format=gallery-medium`,
      name: "BEREKE BR-810 серый",
      description: "Электрочайник",
      rating: 4.5,
      link: "https://kaspi.kz/shop/p/elektrochainik-bereke-br-810-seryi-109981423/?c=750000000",
      likes: 20,
      liked: false,
    },
    {
      id: 3,
      image: `https://resources.cdn-kaspi.kz/img/m/p/hd4/h94/63804412854302.jpg?format=gallery-medium`,
      name: "LG F2J3NS0W белый",
      description: "Стиральная машина",
      rating: 4.5,
      link: "https://kaspi.kz/shop/p/lg-f2j3ns0w-belyi-3601511/?c=750000000",
      likes: 37,
      liked: false,
    },
    {
      id: 4,
      image: `https://resources.cdn-kaspi.kz/img/m/p/h47/ha1/64094073815070.jpg?format=gallery-medium`,
      name: "Generic SF-400",
      description: "Кухонные весы",
      rating: 5,
      link: "https://kaspi.kz/shop/p/generic-sf-400-102531445/?c=750000000",
      likes: 9,
      liked: false,
    },
    {
      id: 5,
      image: `https://resources.cdn-kaspi.kz/img/m/p/hd0/hc4/64156819783710.jpg?format=gallery-medium`,
      name: "Maxmoll H2O Humid-300 белый",
      description: "Увлажнитель воздуха",
      rating: 4.5,
      link: "https://kaspi.kz/shop/p/uvlazhnitel-vozduha-maxmoll-h2o-humid-300-belyi-102027263/?c=750000000",
      likes: 54,
      liked: false,
    },
    {
      id: 6,
      image: `https://resources.cdn-kaspi.kz/img/m/p/h49/h36/64432195403806.jpg?format=gallery-medium`,
      name: "Proliss Pro-808 черный",
      description: "Вафельница",
      rating: 4.5,
      link: "https://kaspi.kz/shop/p/vafel-nitsa-proliss-pro-808-chernyi-105935489/?c=750000000",
      likes: 121,
      liked: false,
    },
    {
      id: 7,
      image: `https://resources.cdn-kaspi.kz/img/m/p/h41/h50/63775335186462.jpg?format=gallery-medium`,
      name: "Delonghi MultiGrill CGH 1030D",
      description: "Электрогриль",
      rating: 5,
      link: "https://kaspi.kz/shop/p/elektrogril-delonghi-multigrill-cgh-1030d-12600018/?c=750000000",
      likes: 38,
      liked: false,
    },
    {
      id: 8,
      image: `https://resources.cdn-kaspi.kz/img/m/p/h33/h3b/65015408984094.jpg?format=gallery-medium`,
      name: "СОЮЗ ТВС-2023МК синий",
      description: "Тепловентилятор",
      rating: 5,
      link: "https://kaspi.kz/shop/p/teploventiljator-sojuz-tvs-2023mk-sinii-107318963/?c=750000000",
      likes: 23,
      liked: false,
    },
    {
      id: 9,
      image: `https://resources.cdn-kaspi.kz/img/m/p/h41/h7e/63777040302110.jpg?format=gallery-medium`,
      name: "Artel VCC 0220 серый",
      description: "Пылесос",
      rating: 5,
      link: "https://kaspi.kz/shop/p/artel-vcc-0220-seryi-3701268/?c=750000000",
      likes: 4,
      liked: false,
    },
    {
      id: 10,
      image: `https://resources.cdn-kaspi.kz/img/m/p/h5b/hfb/67838348722206.jpg?format=gallery-medium`,
      name: "Magna M20B7003-BL черный",
      description: "Микроволновая печь",
      rating: 5,
      link: "https://kaspi.kz/shop/p/magna-m20b7003-bl-chernyi-108426671/?c=750000000",
      likes: 160,
      liked: false,
    },

  ];
export let jewelry: Product[] = [
    {
        id: 1,
        image: `https://resources.cdn-kaspi.kz/img/m/p/h3a/h0c/67797436170270.jpg?format=gallery-medium`,
        name: "Цепь Золото России 570007023",
        description: "длина 55 см, вес 4.23 г золото",
        rating: 5,
        link: "https://kaspi.kz/shop/p/zoloto-rossii-570007023-dlina-55-sm-ves-4-23-g-zoloto-pletenie-bismark-108406609/?c=750000000",
        likes: 344,
        liked: false,
      },
      {
        id: 2,
        image: `https://resources.cdn-kaspi.kz/img/m/p/h7c/hea/85053881090078.jpg?format=gallery-medium`,
        name: "Цепь Золото России 449741",
        description: "длина 55 см, вес 10.11 г золото, плетение бисмарк",
        rating: 5,
        link: "https://kaspi.kz/shop/p/zoloto-rossii-449741-dlina-55-sm-ves-10-11-g-zoloto-pletenie-bismark-109200489/?c=750000000",
        likes: 177,
        liked: false,
      },
      {
        id:3,
        image: `https://resources.cdn-kaspi.kz/img/m/p/hfc/h27/64358949290014.jpg?format=gallery-medium`,
        name: "Комплект AJH Серебряный комплект",
        description: "11 грамм. Серебро, золото, фианит",
        rating: 4.5,
        link: "https://kaspi.kz/shop/p/ajh-serebrjanyi-komplekt-s-zolotymi-vstavkami-19-razmer-11-gramm-serebro-zoloto-fianit-106723567/?c=750000000",
        likes: 126,
        liked: false,
      },
      {
        id: 4,
        image: `https://resources.cdn-kaspi.kz/img/m/p/hed/hf4/64497475092510.jpg?format=gallery-medium`,
        name: "Кольцо AIZHAN GOLD 7606/804",
        description: "размер 19.5 вес 2.35 г золото, фианит",
        rating: 5,
        link: "https://kaspi.kz/shop/p/aizhan-gold-7606-804-razmer-19-5-ves-2-35-g-zoloto-fianit-106127946/?c=750000000",
        likes: 170,
        liked: false,
      },
      {
        id: 5,
        image: `https://resources.cdn-kaspi.kz/img/m/p/h03/h57/64410307887134.jpg?format=gallery-medium`,
        name: "Подвеска Серебро России 2001",
        description: "вес 5 г серебро, фианит",
        rating: 5,
        link: "https://kaspi.kz/shop/p/podveska-serebro-rossii-2001-ves-5-g-serebro-fianit-106219589/?c=750000000",
        likes: 61,
        liked: false,
      },
      
];
export let categories: Category[] = [new Category(1, "Legos", legos, false), new Category(2, "Phones", phones, false), 
                                new Category(3, "Appliances", appliances, false), new Category(4, "Jewelry", jewelry, false)];
