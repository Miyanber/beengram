!function () {
    const buttons = document.getElementsByClassName("comment_form_link");
    for (const button of buttons) {
        button.addEventListener("click", () => {
            const commentPk = button.getAttribute("data-pk");
            const comment_form = document.getElementById(`${commentPk}-comment_form`);
            comment_form.hidden = !comment_form.hidden;
        });
    }
}();