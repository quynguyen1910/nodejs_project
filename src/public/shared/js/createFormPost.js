export default (nameForm) => {
    const formCreate = document.createElement("form");
    formCreate.name = nameForm;
    formCreate.method = "POST";
    document.body.appendChild(formCreate);
    return formCreate
}