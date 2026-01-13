function customRender(reactElement, maincontainer) {
    const domElement = document.createElement(reactElement.type);

    // FIX 1: innerHTML (not innerHtml)
    domElement.innerHTML = reactElement.Children;

    // FIX 2: set attributes correctly
    domElement.setAttribute("href", reactElement.props.href);
    domElement.setAttribute("target", reactElement.props.target);

    maincontainer.appendChild(domElement);
}

const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    Children: "click me to visit google"
};

const maincontainer = document.querySelector("#root");
customRender(reactElement, maincontainer);
