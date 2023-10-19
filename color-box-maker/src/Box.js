function Box({height, width, backgroundColor}){

    const style = {
        height: Number(height),
        width: Number(width),
        backgroundColor: backgroundColor,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '1rem',
        marginBottom: '1rem'
    }

    return (<div style={style} data-testid="box">  </div>)
}

export default Box