const CheckOutModal = ({ className }) => {
    return(
        <div 
            className={className}
            style={{
                display: 'flex'
            }}
        >
            <div style={{padding: '20px', paddingTop: '30px', borderRight: '1px solid black'}}>
                <form>
                    <label htmlFor="">First Name:</label>
                    <input type="text" />
                    <label htmlFor="">Last Name:</label>
                    <input type="text" /><br/>
                    <label htmlFor="">Street number:</label>
                    <input type="text" /><br/>
                    <label htmlFor="">Street name:</label>
                    <input type="text" /><br/>
                    <label htmlFor="">City:</label>
                    <input type="text" />

                    
                </form>
            </div>
            <div></div>
        </div>
    )
}

export default CheckOutModal;