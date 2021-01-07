window.addEventListener("error", (e: any) => {
    /** 默认`base64`图片 */
    const defaultImg = require('@/assets/img/error.jpg');
    /**
     * @type {HTMLImageElement}
     */
    const node = e.target;
    if (node.nodeName && node.nodeName.toLocaleLowerCase() === "img") {
        node.style.objectFit = "cover";
        node.src = defaultImg;
    }
}, true);
