// import store from "../redux/store";
const ArrayToObj = (arr) => {
  let newObj = {};
  arr.map((ele) => {
    if (newObj[ele.StockSymbol]) {
      newObj[ele.StockSymbol].push(ele);
    } else {
      newObj[ele.StockSymbol] = [ele];
    }
  });
  return newObj;
};

const ObjToArray = (obj) => {
  let newArr = [];
  Object.keys(obj)?.map((key) => {
    let a = {
      [key]:
        (((-obj[key][0].Open + obj[key][obj[key].length - 1].Close) /
          obj[key][0].Open) *
          100) /
        obj[key].length,
    };
    newArr.push(a);
  });
  return newArr;
};
const getStockNames = (arr) => {
  const newArr = [];
  arr.map((e) => {
    newArr.push(Object.keys(e)[0]);
  });
  return newArr;
};

const getStockValues = (arr) => {
  const newArr = [];
  arr.map((e) => {
    newArr.push(Object.values(e)[0]);
  });
  return newArr;
};
export const FilterStocks = (data, type) => {
  const filter = ArrayToObj(data);
  const newObj = ObjToArray(filter);
  newObj.sort((a, b) => {
    return a[Object.keys(a)[0]] - b[Object.keys(b)[0]];
  });

  return {
    labels: type == "top" ? getStockNames(newObj.slice(-10)).reverse() : getStockNames(newObj.slice(0,10)),
    dataSetData:  type == "top" ? getStockValues(newObj.slice(-10)).reverse(): getStockValues(newObj.slice(0,10)),
  };
};
export const getStockAvgPer = (data) => {
  let filter = {};
  data.map((ele) => {
    if (filter[ele.StockSymbol]) {
      filter[ele.StockSymbol].push(ele);
    } else {
      filter[ele.StockSymbol] = [ele];
    }
  });
  console.log("filter", Object.keys(filter));
  return Object.keys(filter);
};
