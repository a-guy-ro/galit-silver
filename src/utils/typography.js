import Typography from "typography"
import fairyGateTheme from "typography-theme-fairy-gates"
fairyGateTheme.overrideStyles = ({rhythm},options) => ({
    'h1,h2,h3,a' : {
        fontFamily: ['Times New Roman', 'PT Sans Narrow'].join(','),
        marginTop: rhythm(1),
        textDecoration: 'none',
        textShadow: 'white 1px'
}
})
fairyGateTheme.bodyFontFamily = ['Times New Roman', 'PT Sans Narrow'];
fairyGateTheme.heaaderFontFamily =['Times New Roman', 'PT Sans Narrow'];


const typography = new Typography(fairyGateTheme)

export const { scale, rhythm, options } = typography
export default typography
// export const rhythm = typography.rhythm