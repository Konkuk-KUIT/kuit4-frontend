import styled from 'styled-components'

export const MenuItemContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    justify-content: space-between;
`

export const MenuContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const MenuImageCircle = styled.div`
    width: 54px;
    height: 54px;
    box-sizing: border-box;
    border-radius: 100%;
    background-color: #ECECEC;
    margin: 28px 16px 28px 24px; // padding을 적용하면 bkgd-color가 padding영역에도 다 적용됨
`

export const MenuInfoContainer = styled.div`
    padding: 16px 0;
`

export const MenuNameContainer = styled.span`
    display: flex;
    flex-direction: row;
`

export const MenuName = styled.span`
    display: inline-block;
    font-family: 'Pretendard';
    font-size: 17px;
    font-weight: 600;
    color: #333D4B;
`

export const BestMenu = styled.span`
     display: inline-block;
    font-family: 'Pretendard';
    font-size: 17px;
    font-weight: 600;
    color: #3182F6;
    padding-left: 6px;
`

export const MenuPrice = styled.div`
        font-family: 'Pretendard';
    font-size: 13px;
    font-weight: 400;
    color: #6B7684;
    padding-top: 5px;
`

export const MenuIngredients = styled.div`
    width: 201px;
    text-align: left;
    font-family: 'Pretendard';
    font-size: 13px;
    font-weight: 400;
    color: #6B7684;
    padding-top: 5px;
`

export const MenuButtonWrapper = styled.div`
    padding: 40px 24px 40px 0;
`