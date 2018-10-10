// !!! Название и сколько функций не пишу - пора начинать включать логику

/*
    1) 
    Есть массив данных
    Нужно достать категории, которые входят в приоритет больше 1 и меньше 4
    Отфильтровать по алфавиту
    Отрисовать на странице в виде списка <ul> <li>
    При клике на LI в каком-то диве (за списком или сверху) хочу видеть название категории по которой кликнули и его ID 

    var data = [
        {
            "id": "Q_omud7oyxgh",
            "name": "Self inhabited property",
            "priority": 1
        },
        {
            "id": "Q_najoofpa3y",
            "name": "Liabilities with BJB",
            "priority": 2
        },
        {
            "id": "Q_mwdnxixxbq",
            "name": "Holiday property",
            "priority": 4
        },
        {
            "id": "Q_xv2a9apj2d",
            "name": "Reference date",
            "priority": 3
        },
        {
            "id": "Q_e5uibgi9xc",
            "name": "Other participations",
            "priority": 5
        },
        {
            "id": "Q_jsk87sanyd",
            "name": "Securities Income",
            "priority": 4
        },
        {
            "id": "Q_brwbesi07b",
            "name": "Purchases in pension fund",
            "priority": 1
        },
        {
            "id": "Q_ljt4s2f8xu",
            "name": "Siblings",
            "priority": 2
        },
        {
            "id": "Q_ngg5im7fi1",
            "name": "Retirement",
            "priority": 1
        }
    ]
*/

/*
    2) 
    Написать опен-клоуз - с возможностью добавить несколько на странцу
*/

/*
    3) 
    Есть массив данных
    Найти объект по ID и изменить в нем name
    Только нужно создать копию, чтобы исходный массив был как сейчас, а новый уже был с изменными данными
    (Так как объекты КОПИРУЮТСЯ По ССЫЛКЕ)

    var data = [
        {
            "id": "Q_omud7oyxgh",
            "name": "Self inhabited property",
            "priority": 1
        },
        {
            "id": "Q_najoofpa3y",
            "name": "Liabilities with BJB",
            "priority": 2
        },
        {
            "id": "Q_mwdnxixxbq",
            "name": "Holiday property",
            "priority": 4
        }
    ]
*/

/*
    4)
    Есть 2 радиобаттона.
    При выборе меняется цена в блоке
    Если нужны какие-то аттрибуты или еще что-то, добавляй по возможности
    Предусмотреть вариант если один из радио будет чекнут

    <label>
        <input type="radio" data-price="10$">
        Light Package
    </label>
    <label>
        <input type="radio" data-price="20$">
        Pro Package
    </label>

    <div class="product">
        <h2 class="title">Service</h2>
        <div class="price"></div>
    </div>
*/

/*
    5)
    Есть массив продуктов
    Есть массив связей - он содержит поле productId который ссылается на продукт
    Задача получить на выходе массив relations с новым полем productName т.е. взять productId сравнить с id producta и найти его имя
    Отрисовать на странице в обратном алфавитном порядке порядке
    var products = [
        {
            "id": "P1510083488586",
            "name": "1E"
        },
        {
            "id": "P1510057858171",
            "name": "3A Account"
        },
        {
            "id": "PR_v1cwovtcxy",
            "name": "Adult Protection Law"
        },
        {
            "id": "P11",
            "name": "Advice Advanced"
        },
        {
            "id": "P14",
            "name": "Advice Basic"
        }
    ];

    var relations = [
        {
            "id": "1",
            "productId": "P1510083488586"
        },
        {
            "id": "2",
            "productId": "P1510057858171"
        },
        {
            "id": "3",
            "productId": "PR_v1cwovtcxy"
        },
        {
            "id": "4",
            "productId": "P11"
        },
        {
            "id": "5",
            "productId": "P14"
        }
    ]
*/