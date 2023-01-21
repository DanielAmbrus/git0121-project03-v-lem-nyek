const reviews = [


    {
        name: "Teszt Elek",
        job: "Javascript fejlesztő",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam a, fuga sint delectus possimus labore eius reprehenderit corporis nesciunt animi, doloremque debitis provident, vel repellendus. Sit alias architecto voluptas, harum doloribus debitis ex incidunt veritatis ad, hic delectus minus asperiores rerum recusandae magnam distinctio velit expedita tempore, illum iusto nihil molestias totam? Consequatur vel mollitia consequuntur molestias voluptas natus perferendis. Doloremque ipsam accusantium id excepturi ea eius. Corporis id sequi quidem voluptate asperiores, magnam quo iure. Omnis quas molestias impedit."

    },

    {
        name: "Török Bálint",
        job: "Manuális tesztelő",
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam a, fuga sint delectus possimus labore eius reprehenderit corporis nesciunt animi, doloremque debitis provident, vel repellendus. Sit alias architecto voluptas, harum doloribus debitis ex incidunt veritatis ad, hic delectus minus asperiores rerum recusandae magnam distinctio velit expedita tempore, illum iusto nihil molestias totam? Consequatur vel mollitia consequuntur molestias voluptas natus perferendis. Doloremque ipsam accusantium id excepturi ea eius. Corporis id sequi quidem voluptate asperiores, magnam quo iure. Omnis quas molestias impedit."

    },

    {
        name: "Szent Endre",
        job: "Java fejlesztő",
        img: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam a, fuga sint delectus possimus labore eius reprehenderit corporis nesciunt animi, doloremque debitis provident, vel repellendus. Sit alias architecto voluptas, harum doloribus debitis ex incidunt veritatis ad, hic delectus minus asperiores rerum recusandae magnam distinctio velit expedita tempore, illum iusto nihil molestias totam? Consequatur vel mollitia consequuntur molestias voluptas natus perferendis. Doloremque ipsam accusantium id excepturi ea eius. Corporis id sequi quidem voluptate asperiores, magnam quo iure. Omnis quas molestias impedit."

    }
];

//Elátrolom változókba azokat az elemeket, melyeket használni akrok

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const text = document.getElementById("text");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let current = 0;

window.addEventListener("load", () => {

    const item = reviews[current];
    img.src = item.img;
    author.textContent = item.author;
    job.textContent = item.job;
    text.textContent = item.text
})

function showPerson(person){

    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.author;
    job.textContent = item.job;
    text.textContent = item.text;
}

nextBtn.addEventListener("click", () =>{

    current++;
    if(current > reviews.length - 1){

        current = 0;
    }

    showPerson(current);
})

prevBtn.addEventListener("click", () =>{

    current--;
    if(current < 0){

        current = reviews.length - 1;
    }

    showPerson(current);
})