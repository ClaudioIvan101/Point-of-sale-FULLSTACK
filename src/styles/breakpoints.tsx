const styles = {
    mobile: "576px",
    tablet: "768px",
    laptop: "992px",
    desktop: "1200px",
}
export const Device  = { 
    mobile: `(min-width: ${styles.mobile})`,
    tablet: `(min-width: ${styles.tablet})`,
    laptop: `(min-width: ${styles.laptop})`,
    desktop: `(min-width: ${styles.desktop})`,
}