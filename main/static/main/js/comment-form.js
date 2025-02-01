!function () {
    const buttons = document.getElementsByClassName("comment_form_link");
    for (let button of buttons) {
        button.addEventListener("click", () => {
            const commentPk = button.getAttribute("data-pk");
            const parent_form = document.getElementById(`${commentPk}-comment_form`);
            parent_form.hidden = !parent_form.hidden;
        });
    }
    const buttons_child = document.getElementsByClassName("comment_form_child_link");
    for (let button of buttons_child) {
        button.addEventListener("click", () => {
            const commentPk = button.getAttribute("data-pk");
            const parent_form = document.getElementById(`${commentPk}-comment_form_child`);
            parent_form.hidden = !parent_form.hidden;
        });
    }
}();