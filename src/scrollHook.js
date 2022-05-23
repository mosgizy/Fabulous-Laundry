const ScrollTo = (id) => {
    const view = document.getElementById(id)
    if (view) {
        view.scrollIntoView({behavior:'smooth'})
    }
    return
}

export default ScrollTo