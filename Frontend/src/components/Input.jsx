export const Input = ({
    field,
    label,
    value,
    onChangeHandler,
    type,
    showErrorMessage,
    validationMessage,
    onBlurHandler,
    textArea,
    ...props
}) => {
    const handleValueChange = (event) => {
        onChangeHandler(event.target.value, field);
    }
    const handleImputBlur = (event) => {
        onBlurHandler(event.target.value, field);
    }
    
  return (
    <>
        <div className="auth-from-label">
            <span>{label}</span>
        </div>
        <div>
            {textArea ? (
                <textarea 
                    type= {type}
                    value={value}
                    onChange={handleValueChange}
                    onBlur={handleImputBlur}
                    rows={5}
                    style={{maxWhidth: "400px"}}
                />
                ) : (
                    <input 
                    type= {type}
                    value={value}
                    onChange={handleValueChange}
                    onBlur={handleImputBlur}
                    />
                    )}
            <span className='auth-form-validation-message'>
                {showErrorMessage && validationMessage}
            </span>
        </div>
    </>
  )
}
