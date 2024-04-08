import style from "./style.module.css"
import Card from "../Card";

const Grid = ({captureData}) => {
    return (
        <div className={style.cards__frame}>
            {
                captureData.data.map(
                    (ele)=><div className={style.card__inside}><Card key={ele._id} ele={ele}/></div>
                )
            }
          

        </div>
    );
}

export default Grid;