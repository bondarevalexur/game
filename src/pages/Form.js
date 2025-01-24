import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const def = `{
  "1": [
    {
      "name": "История",
      "values": [
        {
          "image": "name.webp",
          "answer": "27 год до н. э.",
          "value": 101,
          "inGame": false
        },
        {
          "question": "Кто был первым императором Рима?",
          "answer": "Октавиан Август",
          "value": 200,
          "inGame": false
        },
        {
          "question": "Когда началась Первая мировая война?",
          "answer": "28 июля 1914 года",
          "value": 300,
          "inGame": false
        },
        {
          "question": "Какое событие привело к падению Берлинской стены?",
          "answer": "Открытие границы между Восточной и Западной Германией в 1989 году",
          "value": 400,
          "inGame": false
        }
      ]
    },
    {
      "name": "Наука",
      "values": [
        {
          "question": "Кто открыл закон всемирного тяготения?",
          "answer": "Исаак Ньютон",
          "value": 100,
          "inGame": false
        },
        {
          "question": "Что такое химический элемент с атомным номером 1?",
          "answer": "Водород",
          "value": 200,
          "inGame": false
        },
        {
          "question": "Какое тело в солнечной системе самое большое по размеру?",
          "answer": "Юпитер",
          "value": 300,
          "inGame": false
        },
        {
          "question": "Как называется наука о жизни и живых организмах?",
          "answer": "Биология",
          "value": 400,
          "inGame": false
        }
      ]
    },
    {
      "name": "Литература",
      "values": [
        {
          "question": "Кто написал 'Войну и мир'?",
          "answer": "Лев Толстой",
          "value": 100,
          "inGame": false
        },
        {
          "question": "Какой автор написал 'Гарри Поттера'?",
          "answer": "Дж. К. Роулинг",
          "value": 200,
          "inGame": false
        },
        {
          "question": "Кто написал '1984'?",
          "answer": "Джордж Оруэлл",
          "value": 300,
          "inGame": true
        },
        {
          "question": "Какой роман считается первым в истории литературы?",
          "answer": "Эпопея о Гильгамеше",
          "value": 400,
          "inGame": false
        }
      ]
    },
    {
      "name": "География",
      "values": [
        {
          "question": "Какая страна считается самой большой по площади?",
          "answer": "Россия",
          "value": 100,
          "inGame": false
        },
        {
          "question": "Какой океан самый глубокий?",
          "answer": "Тихий океан",
          "value": 200,
          "inGame": false
        },
        {
          "question": "Какой континент является самым маленьким по площади?",
          "answer": "Австралия",
          "value": 300,
          "inGame": false
        },
        {
          "question": "Какая река является самой длинной в мире?",
          "answer": "Нил",
          "value": 400,
          "inGame": false
        }
      ]
    },
    {
      "name": "Кино и телевидение",
      "values": [
        {
          "question": "Кто сыграл Железного Человека в фильмах Marvel?",
          "answer": "Роберт Дауни-младший",
          "value": 100,
          "inGame": false
        },
        {
          "question": "Какой фильм выиграл Оскар за лучший фильм в 2020 году?",
          "answer": "Паразиты",
          "value": 200,
          "inGame": false
        },
        {
          "question": "Кто режиссировал фильм 'Титаник'?",
          "answer": "Джеймс Кэмерон",
          "value": 300,
          "inGame": false
        },
        {
          "question": "Какая актриса сыграла главную роль в фильме 'Голодные игры'?",
          "answer": "Дженнифер Лоуренс",
          "value": 400,
          "inGame": false
        }
      ]
    },
    {
      "name": "Музыка",
      "values": [
        {
          "question": "Какой альбом The Beatles стал самым продаваемым в истории?",
          "answer": "Sgt. Pepper's Lonely Hearts Club Band",
          "value": 100,
          "inGame": false
        },
        {
          "question": "Какое устройство является первым персональным компьютером Apple?",
          "answer": "Apple I",
          "value": 200,
          "inGame": false
        },
        {
          "question": "Кто является королем поп-музыки?",
          "answer": "Майкл Джексон",
          "value": 300,
          "inGame": false
        },
        {
          "question": "Какая песня группы Queen считается самым известным хитом?",
          "answer": "Bohemian Rhapsody",
          "value": 400,
          "inGame": false
        }
      ]
    }
  ],
  "2": [
    {
      "name": "История",
      "values": [
        {
          "image": "name.webp",
          "answer": "27 год до н. э.",
          "value": 102,
          "inGame": false
        },
        {
          "question": "Кто был первым императором Рима?",
          "answer": "Октавиан Август",
          "value": 200,
          "inGame": false
        },
        {
          "question": "Когда началась Первая мировая война?",
          "answer": "28 июля 1914 года",
          "value": 300,
          "inGame": false
        },
        {
          "question": "Какое событие привело к падению Берлинской стены?",
          "answer": "Открытие границы между Восточной и Западной Германией в 1989 году",
          "value": 400,
          "inGame": false
        }
      ]
    },
    {
      "name": "Наука",
      "values": [
        {
          "question": "Кто открыл закон всемирного тяготения?",
          "answer": "Исаак Ньютон",
          "value": 100,
          "inGame": false
        },
        {
          "question": "Что такое химический элемент с атомным номером 1?",
          "answer": "Водород",
          "value": 200,
          "inGame": false
        },
        {
          "question": "Какое тело в солнечной системе самое большое по размеру?",
          "answer": "Юпитер",
          "value": 300,
          "inGame": false
        },
        {
          "question": "Как называется наука о жизни и живых организмах?",
          "answer": "Биология",
          "value": 400,
          "inGame": false
        }
      ]
    },
    {
      "name": "Литература",
      "values": [
        {
          "question": "Кто написал 'Войну и мир'?",
          "answer": "Лев Толстой",
          "value": 100,
          "inGame": false
        },
        {
          "question": "Какой автор написал 'Гарри Поттера'?",
          "answer": "Дж. К. Роулинг",
          "value": 200,
          "inGame": false
        },
        {
          "question": "Кто написал '1984'?",
          "answer": "Джордж Оруэлл",
          "value": 300,
          "inGame": true
        },
        {
          "question": "Какой роман считается первым в истории литературы?",
          "answer": "Эпопея о Гильгамеше",
          "value": 400,
          "inGame": false
        }
      ]
    },
    {
      "name": "География",
      "values": [
        {
          "question": "Какая страна считается самой большой по площади?",
          "answer": "Россия",
          "value": 100,
          "inGame": false
        },
        {
          "question": "Какой океан самый глубокий?",
          "answer": "Тихий океан",
          "value": 200,
          "inGame": false
        },
        {
          "question": "Какой континент является самым маленьким по площади?",
          "answer": "Австралия",
          "value": 300,
          "inGame": false
        },
        {
          "question": "Какая река является самой длинной в мире?",
          "answer": "Нил",
          "value": 400,
          "inGame": false
        }
      ]
    },
    {
      "name": "Кино и телевидение",
      "values": [
        {
          "question": "Кто сыграл Железного Человека в фильмах Marvel?",
          "answer": "Роберт Дауни-младший",
          "value": 100,
          "inGame": false
        },
        {
          "question": "Какой фильм выиграл Оскар за лучший фильм в 2020 году?",
          "answer": "Паразиты",
          "value": 200,
          "inGame": false
        },
        {
          "question": "Кто режиссировал фильм 'Титаник'?",
          "answer": "Джеймс Кэмерон",
          "value": 300,
          "inGame": false
        },
        {
          "question": "Какая актриса сыграла главную роль в фильме 'Голодные игры'?",
          "answer": "Дженнифер Лоуренс",
          "value": 400,
          "inGame": false
        }
      ]
    },
    {
      "name": "Музыка",
      "values": [
        {
          "question": "Какой альбом The Beatles стал самым продаваемым в истории?",
          "answer": "Sgt. Pepper's Lonely Hearts Club Band",
          "value": 100,
          "inGame": false
        },
        {
          "question": "Какое устройство является первым персональным компьютером Apple?",
          "answer": "Apple I",
          "value": 200,
          "inGame": false
        },
        {
          "question": "Кто является королем поп-музыки?",
          "answer": "Майкл Джексон",
          "value": 300,
          "inGame": false
        },
        {
          "question": "Какая песня группы Queen считается самым известным хитом?",
          "answer": "Bohemian Rhapsody",
          "value": 400,
          "inGame": false
        }
      ]
    }
  ],
  "3": [
    {
      "name": "История",
      "values": [
        {
          "image": "name.webp",
          "answer": "27 год до н. э.",
          "value": 103,
          "inGame": false
        },
        {
          "question": "Кто был первым императором Рима?",
          "answer": "Октавиан Август",
          "value": 200,
          "inGame": false
        },
        {
          "question": "Когда началась Первая мировая война?",
          "answer": "28 июля 1914 года",
          "value": 300,
          "inGame": false
        },
        {
          "question": "Какое событие привело к падению Берлинской стены?",
          "answer": "Открытие границы между Восточной и Западной Германией в 1989 году",
          "value": 400,
          "inGame": false
        }
      ]
    },
    {
      "name": "Наука",
      "values": [
        {
          "question": "Кто открыл закон всемирного тяготения?",
          "answer": "Исаак Ньютон",
          "value": 100,
          "inGame": false
        },
        {
          "question": "Что такое химический элемент с атомным номером 1?",
          "answer": "Водород",
          "value": 200,
          "inGame": false
        },
        {
          "question": "Какое тело в солнечной системе самое большое по размеру?",
          "answer": "Юпитер",
          "value": 300,
          "inGame": false
        },
        {
          "question": "Как называется наука о жизни и живых организмах?",
          "answer": "Биология",
          "value": 400,
          "inGame": false
        }
      ]
    },
    {
      "name": "Литература",
      "values": [
        {
          "question": "Кто написал 'Войну и мир'?",
          "answer": "Лев Толстой",
          "value": 100,
          "inGame": false
        },
        {
          "question": "Какой автор написал 'Гарри Поттера'?",
          "answer": "Дж. К. Роулинг",
          "value": 200,
          "inGame": false
        },
        {
          "question": "Кто написал '1984'?",
          "answer": "Джордж Оруэлл",
          "value": 300,
          "inGame": true
        },
        {
          "question": "Какой роман считается первым в истории литературы?",
          "answer": "Эпопея о Гильгамеше",
          "value": 400,
          "inGame": false
        }
      ]
    },
    {
      "name": "География",
      "values": [
        {
          "question": "Какая страна считается самой большой по площади?",
          "answer": "Россия",
          "value": 100,
          "inGame": false
        },
        {
          "question": "Какой океан самый глубокий?",
          "answer": "Тихий океан",
          "value": 200,
          "inGame": false
        },
        {
          "question": "Какой континент является самым маленьким по площади?",
          "answer": "Австралия",
          "value": 300,
          "inGame": false
        },
        {
          "question": "Какая река является самой длинной в мире?",
          "answer": "Нил",
          "value": 400,
          "inGame": false
        }
      ]
    },
    {
      "name": "Кино и телевидение",
      "values": [
        {
          "question": "Кто сыграл Железного Человека в фильмах Marvel?",
          "answer": "Роберт Дауни-младший",
          "value": 100,
          "inGame": false
        },
        {
          "question": "Какой фильм выиграл Оскар за лучший фильм в 2020 году?",
          "answer": "Паразиты",
          "value": 200,
          "inGame": false
        },
        {
          "question": "Кто режиссировал фильм 'Титаник'?",
          "answer": "Джеймс Кэмерон",
          "value": 300,
          "inGame": false
        },
        {
          "question": "Какая актриса сыграла главную роль в фильме 'Голодные игры'?",
          "answer": "Дженнифер Лоуренс",
          "value": 400,
          "inGame": false
        }
      ]
    },
    {
      "name": "Музыка",
      "values": [
        {
          "question": "Какой альбом The Beatles стал самым продаваемым в истории?",
          "answer": "Sgt. Pepper's Lonely Hearts Club Band",
          "value": 100,
          "inGame": false
        },
        {
          "question": "Какое устройство является первым персональным компьютером Apple?",
          "answer": "Apple I",
          "value": 200,
          "inGame": false
        },
        {
          "question": "Кто является королем поп-музыки?",
          "answer": "Майкл Джексон",
          "value": 300,
          "inGame": false
        },
        {
          "question": "Какая песня группы Queen считается самым известным хитом?",
          "answer": "Bohemian Rhapsody",
          "value": 400,
          "inGame": false
        }
      ]
    }
  ]
}`;
const Form = () => {
    var _a;
    const defValue = (_a = window.localStorage.getItem("data")) !== null && _a !== void 0 ? _a : def;
    const [textarea, setTextarea] = useState(defValue);
    const maptt = (resetData) => {
        return resetData.map((item) => (Object.assign(Object.assign({}, item), { values: item.values.map((value) => (Object.assign(Object.assign({}, value), { inGame: false }))) })));
    };
    const handleSubmit = () => {
        const resetData = JSON.parse(textarea);
        const newResetData = {
            "1": maptt(resetData["1"]),
            "2": maptt(resetData["2"]),
            "3": maptt(resetData["3"]),
        };
        window.localStorage.setItem("data", JSON.stringify(newResetData, undefined, 4));
    };
    return (_jsxs("div", { className: "flex flex-col items-center justify-center h-screen", children: [_jsx("button", { className: "py-7 mb-3 bg-gray-200 text-xl text-blue-800 font-semibold rounded w-[90%] hover:bg-gray-400 hover:text-blue-300", type: "button", onClick: handleSubmit, children: "\u0417\u0430\u0434\u0430\u0442\u044C" }), _jsx("textarea", { className: "text-black w-[90%] h-[70%] p-5 mb-3 rounded", onChange: (e) => {
                    setTextarea(e.target.value);
                }, value: textarea }), _jsx("button", { className: "py-7  bg-gray-200 text-xl text-blue-800 font-semibold rounded w-[90%] hover:bg-gray-400 hover:text-blue-300", type: "button", onClick: handleSubmit, children: "\u0417\u0430\u0434\u0430\u0442\u044C" })] }));
};
export default Form;
