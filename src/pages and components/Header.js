export default function Header(){
    return (
        <div className="row header"
        style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px',
            gap: '10px',
            textAlign:"center"
        }}
        >
        <h1>Domz Inventory</h1>
        </div>
    )
}