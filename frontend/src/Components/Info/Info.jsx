import './info.css'

const Info = () => {
  return (
    <section className="sectionInfo">
      <div className="container">
        <div className="left">
          <h2>Почему стоит заказать уборку у нас ?</h2>
          <p>Мы небольшая частная фирма и это наше преимущество перед крупными организациями. Весь процесс уборки
            протекает под жестким контролем. Нас несколько клинеров, но мы надежные и профессиональные исполнители с
            опытом работы более 7 лет и огромной рекомендательной базой! Мы знаем своё дело на отлично и выполняем его с
            большим удовольствием!</p>
          <h4>В чем наше преимущество:</h4>
          <ul>
            <li>Низкие цены при высоком качестве</li>
            <li>Скидки на повторные заказы</li>
            <li>Мы работаем без выходных</li>
            <li>100% довольных клиентов</li>
            <li>Наличие личного профессионального инструмента</li>
          </ul>
        </div>
        <div className="right">
          <h2>Условия заказа и оплаты</h2>
          <p>Мы работает с физическими и юридическими лицами по Бресту и Брестскому району. Возможен выезд по Брестской области в пределах 60 км: Жабинковский р-н, Каменецкий р-н, Кобринский р-н. Выполняем срочные заказы за дополнительную плату - выезд в течение 2-х часов с момента заказа.
          </p>
          <h4>Этапы заказа уборки:</h4>
          <ol>
            <li>Заявка на уборку по телефону или через сайт</li>
            <li>Осмотр объекта (можно по фото)</li>
            <li>Калькуляция стоимости работ</li>
            <li>Заключение договора</li>
            <li>Внесение предоплаты 50% (только для юр. лиц)</li>
            <li>Выполнение работы и полный расчет</li>
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Info;
