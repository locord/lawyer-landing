import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import InternalTextBanner from './../components/banners/internalTextBanner';
import ReviewsSlider from '../components/banners/reviews';
import {Helmet} from 'react-helmet';
import webConfig from "../../../webConfig";

class About extends Component {

	head() {
		return (
			<Helmet bodyAttributes={{class: "aboutPage"}}>
				<title>{`О себе - Дмитрий Пикунов`}</title>
			</Helmet>
		);
	}

	render() {

		return (
			<div>
				{this.head()}
				<InternalTextBanner Heading="О себе" wrapperClass="about"/>
				<ReactCSSTransitionGroup transitionName="anim" transitionAppear={true} transitionAppearTimeout={5000}
										 transitionEnter={false} transitionLeave={false}>
					<div className="main anim-appear container">
						<div className="aboutPage_wrapper">
							<div className="row">
								<div className="col">
									<div className="content_block">
										<img src={`${webConfig.siteURL}/assets/graphics/aboutPage/pikunov.jpg`}
											 className="float-md-right shadow mx-sm-auto d-block rounded"
											 alt="Пикунов"/>
										<h2>
											Образование:
										</h2>
										<p>Окончил Ордена Ленина Государственный университет имени Ленинского
											Комсомола, г. Воронеж. Один из немногих на постсоветском пространстве,
											сумевших сохранить высококвалифицированный преподавательский состав и не
											потерявшим связь науки с непосредственной деятельностью субъектов права. В
											период моего обучения лекции читали такие известные в области права научные
											деятели, как профессора: Баев Олег Яковлевич, Панько Константин
											Александрович,
											Старилов Юрий Николаевич.
										</p>
										<h2>ПРОФЕССИОНАЛЬНАЯ ДЕЯТЕЛЬНОСТЬ:</h2>
										<ul>
											<li>Стаж работы адвокатом более 18 лет.</li>
											<li>Являюсь членом адвокатской палаты города Москвы.</li>
											<li>Регистрационный номер: 77/7274</li>
										</ul>
										<p>Свою деятельность в качестве адвоката начал в 1999 году в Центральной
											юридической консультации города Орла. В 2004 году стал членом адвокатской
											палаты города Москвы.</p>
										<p>Имею серьезный положительный опыт защиты, в том числе руководителей
											предприятий, от уголовного преследования
											по преступлениям в сфере экономики (кража, мошенничество, присвоение или
											растрата, незаконная банковская деятельность, легализация (отмывание)
											денежных
											средств, совершение валютных операций с использованием подложных документов,
											уклонение от уплаты налогов, уклонение от исполнения обязанностей по
											репатриации
											денежных средств в иностранной валюте или валюте Российской Федерации
											), должностным преступлениям (злоупотребление должностными полномочиями,
											получение взятки) и иным преступлениям (организация преступного сообщества,
											хранение боеприпасов и огнестрельного оружия и т. д.).</p>
										<h2> ПОВЫШЕНИЕ КВАЛИФИКАЦИИ: </h2>
										<p>Постоянно самостоятельно, либо совместно со
											своими коллегами, участвую в
											рассмотрении арбитражными судами и судами общей юрисдикции различной степени
											сложности споров, в том числе по делам, связанным с закупками по 44-ФЗ и
											223-ФЗ,
											налоговыми правонарушениями, корпоративными спорами, хозяйственными спорами,
											взысканием задолженности, что расширяет адвокатский кругозор и дает
											возможность
											более квалифицированно подходить к защите своих доверителей в уголовных
											делах.</p>
										<p>Специфика работы заставляет непрерывно следить за изменениями
											законодательства,
											изучать специальную литературу, участвовать в семинарах по повышению
											квалификации.</p>
										<h2> МОИ ПРЕИМУЩЕСТВА: </h2>
										<ul>
											<li>Я не бывший судья</li>
											<li>Я не бывший следователь</li>
											<li>Я не бывший сотрудник правоохранительных органов</li>
										</ul>
										<p>В связи с чем у меня не сформировался обвинительный уклон и предвзятое
											отношение
											к тем, кто попал в жернова, так называемого, правосудия!</p>
										<p>В противоположность следователю, который с каждым годом становится все
											черствее
											к «фигурантам дела», я, зная изнанку правосудия не понаслышке, все больше и
											больше доверяю своим клиентами и использую весь имеющийся опыт и не
											запрещенные
											законом методы для их защиты.</p>
										<p>Для меня любой человек, независимо от того, является ли он моим подзащитным,
											не
											является преступником, даже если в отношении него был вынесен обвинительный
											приговор, и он находиться в местах лишения свободы, или даже если он
											признался в
											совершении преступления.</p>
										<p>В моем понимании <strong>УГОЛОВНЫЙ АДВОКАТ - ЭТО ПРИЗВАНИЕ!</strong></p>
											<p><strong>Адвокат – это тот, кто не отворачивается от человека даже тогда, когда от
											него
											отворачиваются самые близкие люди.</strong></p>
										<p>А такое происходит довольно часто, поскольку, не обладая специальными
											познаниями
											и соответствующим жизненным опытом, даже близкие начинают верить
											сфабрикованным
											доказательствам и настойчивым убеждениям следователя в виновности не чужого
											им
											человека.</p>
										<p>И только адвокат, в подобных ситуациях, способен сохранить хладнокровие,
										выстроить линию защиты, оказать психологическую поддержку!</p>
										<p>Опять же,
											<strong>Адвокат – это смелость противостоять всей мощи государственной
											карательной машины</strong> со всеми её чиновниками, в погонах и без них, которая
											ополчилась на, прежде всего, человека!</p>
										<p>20 апреля 2017 г. VIII Всероссийским съездом адвокатов был принят <u>Стандарт
											осуществления адвокатом защиты в уголовном судопроизводстве</u>, который сделал
											деятельность адвоката прозрачной и предсказуемой. Это хорошо для доверителя,
											который понимает, что должен сделать адвокат за полученный гонорар.
											Ознакомившись с этим стандартом, любознательный человек обратит внимание на
											такие формулировки, как «иные средства защиты прав и законных интересов
											подзащитного», «иные действия, необходимые для реализации правовой позиции
											по
											делу». Именно индивидуальный набор иных средств защиты и иных действий
											определяет профессиональный уровень адвоката, его способность отстоять
											интересы
											подзащитного. Набор этих средств постоянно пополняется, видоизменяется,
											совершенствуется.</p>
										<p>За время своей практики мне удалось сформировать широкий набор таких средств
											и
											инструментов, который, в совокупности с серьезным адвокатским опытом,
											позволяет
											добросовестно, качественно и результативно защищать интересы человека!</p>
									</div>
									<ReviewsSlider Heading="Отзывы"/>
								</div>
							</div>
						</div>
					</div>
				</ReactCSSTransitionGroup>
			</div>
		);
	}

};

export default {
	component: About
};