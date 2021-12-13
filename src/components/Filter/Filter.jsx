function Filter({ value, onChange }) {
    return (
        <>
            <label>
                Find contacts by name
            </label>
            <input
                name="filter"
                type="text"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Введите имя которое ищите"
                autoComplete="off"
                value={value}
                onChange={onChange}
            />
        </>
    )
}

export { Filter}