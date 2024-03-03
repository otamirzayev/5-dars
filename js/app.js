import jobs from "./data.js";

const template = document.getElementById("job-list-template");
const jobsList = document.getElementById("job-list");
const filterAll = document.getElementById("filter-all")

const allFilter = [];





jobs.forEach((job) => {
  let filterData = [
    {
      role: job.role
    },
    {
      languages: [...job.languages],
    },
    {
      tools: [...job.tools],
    },
    {
      level: job.level
    },
  ];

  const clone = template.content.cloneNode(true);
  
  
  if(job.featured) {
    clone.querySelector(".job-list__item").classList.add("border-left")
  };
  
  

  //image
  clone.querySelector('.job-list__img').src = job.logo;
  //companiy
  clone.querySelector('.job-list__company').textContent = job.company;
  //status-new
  clone.querySelector('.job-list__status__new').style.display = `${job.new ? "block" : "none"}`;
  //featured
  clone.querySelector('.job-list__featured').style.display = `${job.featured ? "block" : "none"}`;
  //position
  clone.querySelector('.job-list__position').textContent = job.position;
  //posteadAt
  clone.querySelector('.job-list__posted').textContent = job.postedAt;
  //contract
  clone.querySelector('.job-list__contract').textContent = job.contract;
  //location
  clone.querySelector('.job-list__location').textContent = job.location;
  
  
  
  
  
   //tools
   //languages
   //level
   //role
  
 
   const filterTemclone = clone.qu(".job-list__filter");


  
     filterData.forEach((data) => {
      const span = document.createElement("span");
      span.classList.add('job-list__filter__item');
       console.log(`${Object.keys(data)[0]} : `, data[Object.keys(data)[0]]);
       if(typeof data[Object.keys(data)[0]] != "object") {
         span.textContent = data[Object.keys(data)[0]];
         span.setAttribute(`data-${data[Object.keys(data)[0]]}` , data[Object.keys(data)[0]]);
         filterTemclone.appendChild(span);
       } else {
        const arr = data[Object.keys(data)[0]];
        arr.forEach((item) => {
          const span = document.createElement("span");
          span.classList.add('job-list__filter__item');
          span.textContent = item;
          span.setAttribute(`data-${data[Object.keys(data)[0]]}` , item);
          filterTemclone.appendChild(span);
        })
       }
     });


   jobsList.appendChild(clone)

});



/*const listEl = document.querySelector("#listEl");
jobs.forEach((item) => {
  const lisItem = document.createElement("li");
  lisItem.classList.add("list__item");

  const itemImg = document.createElement("img");
  itemImg.classList.add("last-img");

  const itemWrapper = document.createElement("div");
  itemWrapper.classList.add("item__wrapper");

  const itemTop = document.createElement("div");
  itemTop.classList.add("top__item");

  const itemTopTitle = document.createElement("h3");
  itemTopTitle.classList.add("top__item-title");

  const itemTopText = document.createElement("p");
  itemTopText.classList.add("top__item-text");

  const itemTopDesc = document.createElement("p");
  itemTopDesc.classList.add("top__item-description");

  const itemCenter = document.createElement("div");
  itemCenter.classList.add("center__item");

  const itemCenterTitle = document.createElement("h2");
  itemCenterTitle.classList.add("center__item-title");

  const itemBtm = document.createElement("p");
  itemBtm.classList.add("bottom__item");

  const itemBtmText = document.createElement("p");
  itemBtmText.classList.add("bottom__item-text");

  const itemListPost = document.createElement("div");
  itemListPost.classList.add("list__post");

  const itemListPostPr = document.createElement("p");
  itemListPostPr.classList.add("bottom__item-text");

  itemImg.src = item.logo;
  itemImg.width = "88";
  itemImg.height = "88";
  lisItem.appendChild(itemImg);

  itemTopTitle.textContent = item.company;
  itemTop.appendChild(itemTopTitle);

  if (item.new == true) {
    itemTopText.textContent = "new";
    itemTop.appendChild(itemTopText);
  }

  if (item.featured == true) {
    itemTopDesc.textContent = "featured";
    itemTop.appendChild(itemTopDesc);
    lisItem.classList.add("border__left");
  }

  itemCenterTitle.textContent = item.position;
  itemCenter.appendChild(itemCenterTitle);

  itemBtmText.textContent = `${item.postedAt}  ${item.contract}  ${item.location} `;
  itemBtm.appendChild(itemBtmText);

  itemWrapper.appendChild(itemTop);
  itemWrapper.appendChild(itemCenter);
  itemWrapper.appendChild(itemBtm);

  lisItem.appendChild(itemWrapper);

  const newArr = [];
  newArr.push(item.role);
  newArr.push(item.level);

  newArr.forEach((word) => {
    const pElement = document.createElement("p");
    pElement.classList.add("list__post-text");
    pElement.textContent = word;
    itemListPost.appendChild(pElement);
  });

  const newRole = item.tools;
  newRole.forEach((word) => {
    const pElement = document.createElement("p");
    pElement.classList.add("list__post-text");
    pElement.textContent = word;
    itemListPost.appendChild(pElement);
  });

  const newSplit = item.languages;
  newSplit.forEach((word) => {
    const pElement = document.createElement("p");
    pElement.classList.add("list__post-text");
    pElement.textContent = word;
    itemListPost.appendChild(pElement);
  });

  lisItem.appendChild(itemListPost);

  listEl.appendChild(lisItem);
});
 */