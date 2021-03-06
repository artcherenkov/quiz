import { TQuestion, TQuestionOption, TRawQuestion } from "../types";

import metroNsk from "../images/quiz/metro-nsk.png";
import metroMsk from "../images/quiz/metro-msk.png";
import metroKazan from "../images/quiz/metro-kazan.png";

import flag1 from "../images/quiz/flag-1.svg";
import flag2 from "../images/quiz/flag-2.svg";
import flag3 from "../images/quiz/flag-3.svg";

import sights1 from "../images/quiz/sights-1.png";
import sights2 from "../images/quiz/sights-2.png";
import sights3 from "../images/quiz/sights-3.png";

const getError = (questionTitle: string) => {
  return (
    "В вариантах ответа к вопросу с заголовком " +
    questionTitle +
    " не найден правильный ответ."
  );
};

export const RAW_QUESTIONS: TRawQuestion[] = [
  {
    type: "single",
    title: "Назови официальную дату основания города Новосибирска.",
    options: ["1893", "1147", "1628"],
    correctAnswer: "1893",
  },
  {
    type: "single",
    title: "На берегах какой реки расположен город Новосибирск?",
    options: ["Ока", "Обь", "Омь"],
    correctAnswer: "Обь",
  },
  {
    type: "single",
    title:
      "В какой океан впадает река, на берегах, которой расположен город Новосибирск?",
    options: ["Тихий", "Северный Ледовитый", "Индийский"],
    correctAnswer: "Северный Ледовитый",
  },
  {
    type: "single",
    title: "В каком океане находятся Новосибирские острова?",
    options: ["Тихом", "Северном Ледовитом", "Атлантическом"],
    correctAnswer: "Северном Ледовитом",
    help: "это принадлежащий России архипелаг, состоящий из 3-х групп островов: Ляховские острова, острова Анжу и острова Де-Лонга",
  },
  {
    type: "single",
    title:
      "В честь какого российского императора установлен памятник в парке «Городское начало» на набережной Оби?",
    options: [
      "В честь Александра III",
      "В честь Александра II",
      "В честь Петра I",
    ],
    correctAnswer: "В честь Александра III",
  },
  {
    type: "single",
    title: "Сколько районов в городе Новосибирске?",
    options: ["9", "10", "13"],
    correctAnswer: "10",
  },
  {
    type: "single",
    title: "Сколько мостов через реку Обь в Новосибирске?",
    options: ["6", "7", "8"],
    correctAnswer: "7",
  },
  {
    type: "single",
    title: "Какие животные держат щит на гербе города Новосибирска?",
    options: ["Белые песцы", "Серые дикобразы", "Черные соболи"],
    correctAnswer: "Черные соболи",
  },
  {
    type: "single",
    title: "Кому посвящена единственная в России станция метро-музей?",
    options: ["В.П. Чкалову", "А.И. Покрышкину", "А.П. Маресьеву"],
    correctAnswer: "А.И. Покрышкину",
    help: "станция названа в честь новосибирца, участника Великой Отечественной войны 1941-1945 гг., прославленного летчика, трижды Героя Советского Союза",
  },
  {
    type: "single",
    title:
      "Какой музей, расположенный в Новосибирском Академгородке, является единственным в России?",
    options: ["Музей Солнца", "Музей Мирного атома", "Музей Золота"],
    correctAnswer: "Музей Солнца",
  },
  {
    type: "single",
    title: "Какой театр расположен на главной площади Новосибирска?",
    options: ["НОВАТ", "«Глобус»", "«Красный факел»"],
    correctAnswer: "НОВАТ",
  },
  {
    type: "single",
    title:
      "Как называется «Государственный научный центр вирусологии и биотехнологии», расположенный в наукограде Кольцово?",
    options: ["Отрезок", "Вектор", "Луч"],
    correctAnswer: "Вектор",
  },
  {
    type: "single",
    title: "Кто из российских борцов является почётным жителем Новосибирска?",
    options: ["Роман Власов", "Александр Карелин", "Алексей Мишин"],
    correctAnswer: "Александр Карелин",
  },
  {
    type: "single",
    title:
      "В форме какого спортивного снаряда в Новосибирске строят новую ледовую арену «Новосибирск-арена»?",
    options: ["Летающей тарелки", "Шайбы", "Камня для кёрлинга"],
    correctAnswer: "Шайбы",
  },
  {
    type: "single",
    title:
      "В каком зимнем виде спорта новосибирская спортсменка Анна Богалий-Титовец стала двухкратной олимпийской чемпионкой?",
    options: ["Лыжный спорт", "Биатлон", "Скелетон"],
    correctAnswer: "Биатлон",
  },
  {
    type: "single",
    title: "Назови талисман хоккейного клуба «Сибирь»",
    options: ["Снежинка", "Снеговик", "Медведь"],
    correctAnswer: "Снеговик",
  },
  {
    type: "image",
    title:
      "Как выглядит схема действующих станций метро Новосибирского Метрополитена?",
    options: [metroNsk, metroMsk, metroKazan],
    correctAnswer: metroNsk,
  },
  {
    type: "image",
    title: "Как выглядит флаг Новосибирска?",
    options: [flag2, flag3, flag1],
    correctAnswer: flag1,
  },
  {
    type: "image",
    title:
      "Какую из достопримечательностей Новосибирска называют географическим центром великой царской Российской Империи?",
    options: [sights1, sights2, sights3],
    correctAnswer: sights1,
  },
  {
    type: "single",
    title: "Какому животному посвящён памятник в новосибирском Академгородке?",
    options: ["Мамонту", "Лабораторной мыши", "Комару"],
    correctAnswer: "Лабораторной мыши",
  },
];

const transformQuestions = (rawQuestions: TRawQuestion[]): TQuestion[] => {
  let correctAnswerId: string;

  return rawQuestions.map((rawQuestion, questionIdx) => {
    const { type, title, options, correctAnswer, help } = rawQuestion;

    const areOptionsIncludeCorrect = options.includes(correctAnswer);
    if (!areOptionsIncludeCorrect) {
      throw new Error(getError(title));
    }

    const questionId = `question-${questionIdx}`;

    const optionsWithId: TQuestionOption[] = options.map(
      (option, optionIdx) => {
        const optionId = `${questionId}-option-${optionIdx}`;
        if (option === correctAnswer) {
          correctAnswerId = optionId;
        }
        return {
          id: optionId,
          value: option,
        };
      }
    );

    return {
      id: questionId,
      type,
      title,
      options: optionsWithId,
      correctAnswerId,
      help,
    };
  });
};

export const questions = transformQuestions(RAW_QUESTIONS);
