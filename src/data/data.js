import finboss from "../assets/image/finboss.svg";
import leadanalyst from "../assets/image/leadanalyst.svg";
import customerspecialist from "../assets/image/customerspecialist.svg";
import point1 from "../assets/image/point1.svg";
import point2 from "../assets/image/point2.svg";
import point3 from "../assets/image/point3.svg";
import point4 from "../assets/image/point4.svg";
import point5 from "../assets/image/point5.svg";
import point6 from "../assets/image/point6.svg";

export const navLink = [
    'О нас',
    'Наши ценности',
    'Вакансии',
    'Начало карьеры',
    'Контакты'
]

export const slides =[
    {
        id: 1,
        name: "Евдокимова Майя",
        specialization: "Генеральный директор",
        description: "Цель нашей работы обеспечить высочайший сервис нашим клиентам. Дать возможность бизнесу сосредоточиться на своих ключевых задачах, передав функции управления персоналом, казначейства, финансового учёта и отчётности нам.",
        image: finboss,
    },
    {
        id: 2,
        name: "Рябова Татьяна",
        specialization: "Ведущий аналитик",
        description: "Наша задача — трансформировать данные в четкие, обоснованные решения. Мы помогаем бизнесу видеть полную картину, находить скрытые возможности и двигаться вперед уверенно, опираясь на аналитику.",
        image: leadanalyst,
    },
    {
        id: 3,
        name: "Васильев Дмитрий",
        specialization: "Специалист по привлечению клиентов",
        description: "Мы строим прочные связи с клиентами, помогая им найти решения, которые ускоряют рост их бизнеса. Наша цель — не просто привлечение, а создание партнерства, основанного на доверии и взаимной выгоде.",
        image: customerspecialist,
    }
]

export const points = [
    { title: "Развитие", icon: point1},
    { title: "Обучение", icon: point2},
    { title: "Ответственность", icon: point3},
    { title: "Динамика", icon: point4, description: 'Общего центра обслуживания. Современные технологии, проекты, рабочие группы'},
    { title: "Комфорт", icon: point5},
    { title: "Надежность", icon: point6},
]