export const scrollIntoView = (target) => {
    const el = document.getElementById(target);
    console.log(el);
    if (!el) return;
    el.scrollIntoView({
        behavior: 'smooth'
    });
};
