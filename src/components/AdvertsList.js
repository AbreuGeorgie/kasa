const appartmentsList = fetch("data.json")
    .then(res => res.json())
    .then(data => console.log(data))

function AdvertsList() {
    return (
        <ul>
            {appartmentsList.map((appartment) => (
                <li>{appartment}</li>
            ))}
        </ul>
    )
}


export default AdvertsList