export default () => {
  const selectWrapperAll = document.querySelectorAll(".ct-select");
  if (selectWrapperAll.length > 0) {
    selectWrapperAll.forEach((selectWrapper) => {
      const select = selectWrapper.children[0];
      const options = [...select.options];
      const arrow = selectWrapper.querySelector(".ct-select-arrow");

      //trạng thái khi đã select
      if (select.value !== "disabled"  || select.value === "") {
        arrow.classList.add("active");
        select.classList.add("active");
      }

      selectWrapper.addEventListener("mousedown", (e) => {
        e.preventDefault();
        select.classList.toggle("click");
        let checkShow = selectWrapper.querySelector("ul");
        if (checkShow) {
          checkShow.classList.remove('active')
          setTimeout(() => {
            checkShow.remove();
          }, 500);
          arrow.classList.remove("click");
          return;
        }
        let ul = document.createElement("ul");
        options.forEach((option) => {
          const li = document.createElement("li");
          if (!option.disabled) {
            li.textContent = option.textContent;
            li.addEventListener("mousedown", (e) => {
              e.stopPropagation();
              select.value = option.value;
              ul.classList.remove('active')
              setTimeout(() => {
                ul.remove();
              }, 500);
              
              arrow.classList.remove("click");
              arrow.classList.add("active");
              select.classList.add("active");
            });
          } else {
            li.style.display = "none";
          }

          ul.appendChild(li);
        });

        selectWrapper.appendChild(ul);
        setTimeout(() => {
          ul.classList.add("active");
        }, 10);
        arrow.classList.add("click");
        // -----click ra ngoài đóng ul----------------
        document.addEventListener("click", (e) => {
          if (!selectWrapper.contains(e.target)) {
            ul.classList.remove('active')
            setTimeout(() => {
              ul.remove();
            }, 500);
            arrow.classList.remove("click");
            select.classList.remove("click");
          } else {
          }
        });
      });
    });
  }
};
