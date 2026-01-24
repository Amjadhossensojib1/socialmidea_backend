const asyncHandler = (requestHandler) => {
    (req,res,nest) => {
        Promise.resolve(requestHandler(req,res,nest)).
        catch((err) => nest(err))
    }
}

export {asyncHandler}