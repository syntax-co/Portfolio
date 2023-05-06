const { Box } = require("@mui/material")




const RocketSpline = () => {


    return(
        <Box sx={{
            width:'100%',
            height:'100vh',
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
        }}>

            

            <script type="module" src="https://unpkg.com/@splinetool/viewer@0.9.324/build/spline-viewer.js"></script>
            <spline-viewer url="https://prod.spline.design/60i6WaA3f1x0L-c1/scene.splinecode"></spline-viewer>


        </Box>
    )
}



export default RocketSpline;