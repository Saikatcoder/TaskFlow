//* higher order function , if you avoide try catch then use asyncHandler

const asyncHandler = (requestHandler)=>{
    return (req, res, next)=>{
        Promise.resolve(
            requestHandler(req, res, next))
        .catch((err)=>next(err))
    }
}

export {asyncHandler}
