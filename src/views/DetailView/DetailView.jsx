import Card from "../../components/Card/Card";

export default function DetailView (props) {
   
   const cardComponent = {...props} && <Card {...props}/>;
   
   return (
      <>
         {cardComponent}       
      </>
   )
}
