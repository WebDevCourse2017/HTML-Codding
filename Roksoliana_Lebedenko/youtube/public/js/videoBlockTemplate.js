let source = document.getElementById("videoTemplate").innerHTML;
let template = Handlebars.compile(source);

let asideSource = document.getElementById("asideTemplate").innerHTML;
let asidetemplate = Handlebars.compile(asideSource);


let videoData = {
    "aside-content": [
        {
            "home-block": [
                {
                    "title": "Головна"
                },
                {
                    "title": "Популярне"
                },
                {
                    "title": "Підписки"
                }
            ],
            "library-block": [
                {
                    "title": "Історія"
                },
                {
                    "title": "Переглянути пізніше"
                }
            ],
            "subscribe-block": [
                {
                    "title": "Популярне на Youtube",
                    "cover-img": "//i.ytimg.com/i/esO4-UStBz-iTTgkY645yw/1.jpg"
                },
                {
                    "title": "Музика",
                    "cover-img": "//i.ytimg.com/i/-9-kyTW8ZkZNDHQJ6FgpwQ/1.jpg"
                },
                {
                    "title": "Спорт",
                    "cover-img": "//i.ytimg.com/i/Egdi0XIXXZ-qJOFPf4JSKw/1.jpg"
                },
                {
                    "title": "Комп'ютерні ігри",
                    "cover-img": "//i.ytimg.com/i/OpNcN46UbXVtpKMrmU4Abg/1.jpg"
                }
            ],
            "films-block": [
                {
                    "title": "Переглянути пізніше",
                    "cover-img": "http://s.ytimg.com/yts/img/innertube/guide/add_channel_guide-vflSJDanE.png"
                },
                {
                    "title": "Фільми YouTube",
                    "cover-img": "../../images/hamburger_menu.svg"
                }
            ],
            "settings-block": [
                {
                    "title": "Налаштування",
                    "cover-img": "../../images/hamburger_menu.svg"
                },
                {
                    "title": "Довідка",
                    "cover-img": "../../images/hamburger_menu.svg"
                },
                {
                    "title": "Надіслати відгук",
                    "cover-img": "../../images/hamburger_menu.svg"
                }
            ],
            "footer-block": [
                {
                    "title": "Інфо"
                },
                {
                    "title": "Преса"
                },
                {
                    "title": "Авторські права"
                },
                {
                    "title": "Творці"
                },
                {
                    "title": "Реклама"
                },
                {
                    "title": "Розробники"
                },
                {
                    "title": "+YouTube"
                }
            ],
            "conditions-block": [
                {
                    "title": "Умови"
                },
                {
                    "title": "Конфіденційність"
                },
                {
                    "title": "Політика та безпека"
                },
                {
                    "title": "Спробувати нові функції"
                }
            ]
        }
    ],
    "aside-channel-content": [
        {
            "channels-block": [
                {
                    "title": "Warner Music Group",
                    "cover-img": "../../images/hamburger_menu.svg"
                },
                {
                    "title": "Gingerbread Man Record",
                    "cover-img": "../../images/hamburger_menu.svg"
                },
                {
                    "title": "TOPSIFY",
                    "cover-img": "../../images/hamburger_menu.svg"
                },
                {
                    "title": "Atlantic Records",
                    "cover-img": "../../images/hamburger_menu.svg"
                },
                {
                    "title": "Jess Glynne",
                    "cover-img": "../../images/hamburger_menu.svg"
                },
                {
                    "title": "Rudimental",
                    "cover-img": "../../images/hamburger_menu.svg"
                },
                {
                    "title": "Saint Raymond",
                    "cover-img": "../../images/hamburger_menu.svg"
                },
                {
                    "title": "Foy Vance",
                    "cover-img": "../../images/hamburger_menu.svg"
                },
                {
                    "title": "Passenger",
                    "cover-img": "../../images/hamburger_menu.svg"
                }
            ]
        }
    ],
    "video-block": [
        {
            "chapter-title": "Поп-музика",
            "video-list": [
                {
                    "cover-image-url": "https://i.ytimg.com/vi/kJQP7kiw5Fk/hqdefault.jpg?sqp=-oaymwEWCNIBEHZIWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLB2bd60UNUuZyYhSR_Fvj_BZDrZSw",
                    "title": "Luis Fonsi - Despacito ",
                    "subtitle": "LuisFonsiVEVO",
                    "view-count": "4,4 млн",
                    "publication-date": "10 місяців тому"
                },
                {
                    "cover-image-url": "https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg?sqp=-oaymwEWCNIBEHZIWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLDi92xCRDXUjA9LE1afIvayq8sQag",
                    "title": "Ed Sheeran - Shape of You ",
                    "subtitle": "Ed Sheeran",
                    "view-count": "2.7 млрд",
                    "publication-date": "9 місяців тому"
                },
                {
                    "cover-image-url": "https://i.ytimg.com/vi/nfs8NYg7yQM/hqdefault.jpg?sqp=-oaymwEWCNIBEHZIWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLAVN0RbysFs5lCiBR1ler3AUVX4NA",
                    "title": "Katy Perry - Swish Swish",
                    "subtitle": "KatyPerryVEVO",
                    "view-count": "337 млн",
                    "publication-date": "3 місяців тому"
                },
                {
                    "cover-image-url": "https://i.ytimg.com/vi/09R8_2nJtjg/hqdefault.jpg?sqp=-oaymwEWCNIBEHZIWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLCReiFH333U_FijHSoKdMBfVSVKRA",
                    "title": "Maroon 5 - Sugar",
                    "subtitle": "Maroon5VEVO",
                    "view-count": "2,4 млн",
                    "publication-date": "2 роки тому"
                }
            ]
        },
        {
            "chapter-title": "Поп-музика",
            "video-list": [
                {
                    "cover-image-url": "https://i.ytimg.com/vi/kJQP7kiw5Fk/hqdefault.jpg?sqp=-oaymwEWCNIBEHZIWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLB2bd60UNUuZyYhSR_Fvj_BZDrZSw",
                    "title": "Luis Fonsi - Despacito ",
                    "subtitle": "LuisFonsiVEVO",
                    "view-count": "4,4 млн",
                    "publication-date": "10 місяців тому"
                },
                {
                    "cover-image-url": "https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg?sqp=-oaymwEWCNIBEHZIWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLDi92xCRDXUjA9LE1afIvayq8sQag",
                    "title": "Ed Sheeran - Shape of You ",
                    "subtitle": "Ed Sheeran",
                    "view-count": "2.7 млрд",
                    "publication-date": "9 місяців тому"
                },
                {
                    "cover-image-url": "https://i.ytimg.com/vi/nfs8NYg7yQM/hqdefault.jpg?sqp=-oaymwEWCNIBEHZIWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLAVN0RbysFs5lCiBR1ler3AUVX4NA",
                    "title": "Katy Perry - Swish Swish",
                    "subtitle": "KatyPerryVEVO",
                    "view-count": "337 млн",
                    "publication-date": "3 місяців тому"
                },
                {
                    "cover-image-url": "https://i.ytimg.com/vi/09R8_2nJtjg/hqdefault.jpg?sqp=-oaymwEWCNIBEHZIWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLCReiFH333U_FijHSoKdMBfVSVKRA",
                    "title": "Maroon 5 - Sugar",
                    "subtitle": "Maroon5VEVO",
                    "view-count": "2,4 млн",
                    "publication-date": "2 роки тому"
                }
            ]
        },
        {
            "chapter-title": "Поп-музика",
            "video-list": [
                {
                    "cover-image-url": "https://i.ytimg.com/vi/kJQP7kiw5Fk/hqdefault.jpg?sqp=-oaymwEWCNIBEHZIWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLB2bd60UNUuZyYhSR_Fvj_BZDrZSw",
                    "title": "Luis Fonsi - Despacito ",
                    "subtitle": "LuisFonsiVEVO",
                    "view-count": "4,4 млн",
                    "publication-date": "10 місяців тому"
                },
                {
                    "cover-image-url": "https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg?sqp=-oaymwEWCNIBEHZIWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLDi92xCRDXUjA9LE1afIvayq8sQag",
                    "title": "Ed Sheeran - Shape of You ",
                    "subtitle": "Ed Sheeran",
                    "view-count": "2.7 млрд",
                    "publication-date": "9 місяців тому"
                },
                {
                    "cover-image-url": "https://i.ytimg.com/vi/nfs8NYg7yQM/hqdefault.jpg?sqp=-oaymwEWCNIBEHZIWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLAVN0RbysFs5lCiBR1ler3AUVX4NA",
                    "title": "Katy Perry - Swish Swish",
                    "subtitle": "KatyPerryVEVO",
                    "view-count": "337 млн",
                    "publication-date": "3 місяців тому"
                },
                {
                    "cover-image-url": "https://i.ytimg.com/vi/09R8_2nJtjg/hqdefault.jpg?sqp=-oaymwEWCNIBEHZIWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLCReiFH333U_FijHSoKdMBfVSVKRA",
                    "title": "Maroon 5 - Sugar",
                    "subtitle": "Maroon5VEVO",
                    "view-count": "2,4 млн",
                    "publication-date": "2 роки тому"
                }
            ]
        },
        {
            "chapter-title": "Поп-музика",
            "video-list": [
                {
                    "cover-image-url": "https://i.ytimg.com/vi/kJQP7kiw5Fk/hqdefault.jpg?sqp=-oaymwEWCNIBEHZIWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLB2bd60UNUuZyYhSR_Fvj_BZDrZSw",
                    "title": "Luis Fonsi - Despacito ",
                    "subtitle": "LuisFonsiVEVO",
                    "view-count": "4,4 млн",
                    "publication-date": "10 місяців тому"
                },
                {
                    "cover-image-url": "https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg?sqp=-oaymwEWCNIBEHZIWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLDi92xCRDXUjA9LE1afIvayq8sQag",
                    "title": "Ed Sheeran - Shape of You ",
                    "subtitle": "Ed Sheeran",
                    "view-count": "2.7 млрд",
                    "publication-date": "9 місяців тому"
                },
                {
                    "cover-image-url": "https://i.ytimg.com/vi/nfs8NYg7yQM/hqdefault.jpg?sqp=-oaymwEWCNIBEHZIWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLAVN0RbysFs5lCiBR1ler3AUVX4NA",
                    "title": "Katy Perry - Swish Swish",
                    "subtitle": "KatyPerryVEVO",
                    "view-count": "337 млн",
                    "publication-date": "3 місяців тому"
                },
                {
                    "cover-image-url": "https://i.ytimg.com/vi/09R8_2nJtjg/hqdefault.jpg?sqp=-oaymwEWCNIBEHZIWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLCReiFH333U_FijHSoKdMBfVSVKRA",
                    "title": "Maroon 5 - Sugar",
                    "subtitle": "Maroon5VEVO",
                    "view-count": "2,4 млн",
                    "publication-date": "2 роки тому"
                }
            ]
        }
    ]
};

let output = template(videoData);
document.querySelector(".main-layout").innerHTML = output;

let asideoutput = asidetemplate(videoData);
document.querySelector(".aside-guide-content").innerHTML = asideoutput;

