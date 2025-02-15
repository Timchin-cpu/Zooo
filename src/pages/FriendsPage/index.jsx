import React from "react";
import routeFriends from "./routes";
import MainSection from "components/MainSection";

import DefaultImg from 'assets/img/default-img.png';
import StarIcon from 'assets/img/star-icon.svg';
import CoinIcon from 'assets/img/coin-icon.svg';

import MobileNav from "components/MobileNav";

const FriendsPage = () => {
    // copy text
    const copyToClipboard = () => {

        const referalUrl = `exonima.com/ru/9UkvA70Ngxm`;
        
        navigator.clipboard.writeText(referalUrl)
          .then(() => {
            console.log("Success copy");
        })
          .catch((err) => {
            console.error('Err copy: ', err);
        });
    };

    return(
        <section className="friends">
            <div className="container">
                <div className="friends-inner">
                    <MainSection />
                    <div className="friends-referal block-style">
                        <div className="section-content">
                            <h2 className="section-content__title">
                                Реферальная система
                            </h2>
                            <p className="section-content__text">
                                Краткое описание, буквально в 2-3 строки,
как и зачем приглашать друзей 
                            </p>
                        </div>
                        <div className="friends-referal__url">
                            <input type="text" name="url" value="exonima.com/ru/9UkvA70Ngxm" readOnly />
                            <button type="button" className="friends-referal__copy" onClick={copyToClipboard}>
                                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.60644 0.450684H11.4219C13.2065 0.450684 14.0283 1.33887 14.0283 3.07373V3.15674L6.62402 3.15674C4.25 3.15674 3.01318 4.38525 3.01318 6.74268L3.01318 13.873H2.60645C0.863281 13.873 0 13.0181 0 11.2998V3.02393C0 1.30567 0.86328 0.450684 2.60644 0.450684ZM18.2902 16.964C18.876 16.3782 18.876 15.4354 18.876 13.5498V8.28357C18.876 6.39795 18.876 5.45514 18.2902 4.86935C17.7044 4.28357 16.7616 4.28357 14.876 4.28357L8.13306 4.28357C6.24744 4.28357 5.30463 4.28357 4.71884 4.86936C4.13306 5.45514 4.13306 6.39795 4.13306 8.28357L4.13306 13.5498C4.13306 15.4354 4.13306 16.3782 4.71884 16.964C5.30463 17.5498 6.24744 17.5498 8.13306 17.5498H14.876C16.7616 17.5498 17.7044 17.5498 18.2902 16.964Z" fill="#AAB2BD"/>
                                </svg>
                            </button>
                        </div>
                        <button type="button" className="friends-referal__btn">
                            Пригласить
                        </button>
                    </div>
                    <div className="friends-block">
                        <div className="friends-block__head f-center-jcsb">
                            <h2 className="section-content__title">
                                Ваши друзья
                            </h2>
                            <div className="friends-block__head-more">
                                Смотреть всех
                            </div>
                        </div>
                        <ul className="friends-list">
                            <li className="friends-list__item">
                                <div className="friends-list__card block-style flex">
                                    <div className="friends-list__image">
                                        <img src={DefaultImg} alt="" />
                                    </div>
                                    <div className="friends-list__content">
                                        <h3 className="friends-list__title">
                                            Ko****ntin Konstant****olsky
                                        </h3>
                                        <p className="friends-list__date">
                                            23 апреля, 2024
                                        </p>
                                        <ul className="friends-params f-center">
                                            <li className="friends-params__item f-center">
                                                <img src={StarIcon} alt="" />
                                                500 EXP
                                            </li>
                                            <li className="friends-params__item f-center">
                                                <img src={CoinIcon} alt="" />
                                                2000
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="friends-list__item">
                                <div className="friends-list__card block-style flex">
                                    <div className="friends-list__image">
                                        <img src={DefaultImg} alt="" />
                                    </div>
                                    <div className="friends-list__content">
                                        <h3 className="friends-list__title">
                                            Ko****ntin Konstant****olsky
                                        </h3>
                                        <p className="friends-list__date">
                                            23 апреля, 2024
                                        </p>
                                        <ul className="friends-params f-center">
                                            <li className="friends-params__item f-center">
                                                <img src={StarIcon} alt="" />
                                                500 EXP
                                            </li>
                                            <li className="friends-params__item f-center">
                                                <img src={CoinIcon} alt="" />
                                                2000
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="friends-list__item">
                                <div className="friends-list__card block-style flex">
                                    <div className="friends-list__image">
                                        <img src={DefaultImg} alt="" />
                                    </div>
                                    <div className="friends-list__content">
                                        <h3 className="friends-list__title">
                                            Ko****ntin Konstant****olsky
                                        </h3>
                                        <p className="friends-list__date">
                                            23 апреля, 2024
                                        </p>
                                        <ul className="friends-params f-center">
                                            <li className="friends-params__item f-center">
                                                <img src={StarIcon} alt="" />
                                                500 EXP
                                            </li>
                                            <li className="friends-params__item f-center">
                                                <img src={CoinIcon} alt="" />
                                                2000
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <MobileNav />
        </section>
    )
};

export {routeFriends};

export default FriendsPage;