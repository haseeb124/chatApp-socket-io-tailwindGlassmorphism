
export const catchAsyncError = (passedFunction) => (req ,res , next) => {
  if(passedFunction){

    Promise.resolve(passedFunction(req ,res , next)).catch(next)
  } else {
    next();
  }
}