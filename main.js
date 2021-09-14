/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// A function that hits the API and returns data
function getWeatherData(_x) {
  return _getWeatherData.apply(this, arguments);
}

function _getWeatherData() {
  _getWeatherData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(location) {
    var response, responseObj;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('https://api.openweathermap.org/data/2.5/weather?q=' + location + '&appid=b25577cea775f772e6801248daec3619', {
              mode: 'cors'
            });

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            responseObj = _context.sent;
            console.log(responseObj);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getWeatherData.apply(this, arguments);
}

getWeatherData('Ilorin');
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtTQUNlQTs7Ozs7NEVBQWYsaUJBQThCQyxRQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUN1QkMsS0FBSyxDQUN4Qix1REFDRUQsUUFERixHQUVFLHlDQUhzQixFQUl4QjtBQUFFRSxjQUFBQSxJQUFJLEVBQUU7QUFBUixhQUp3QixDQUQ1Qjs7QUFBQTtBQUNNQyxZQUFBQSxRQUROO0FBQUE7QUFBQSxtQkFPMEJBLFFBQVEsQ0FBQ0MsSUFBVCxFQVAxQjs7QUFBQTtBQU9NQyxZQUFBQSxXQVBOO0FBUUVDLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixXQUFaOztBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBVUFOLGNBQWMsQ0FBQyxRQUFELENBQWQsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEEgZnVuY3Rpb24gdGhhdCBoaXRzIHRoZSBBUEkgYW5kIHJldHVybnMgZGF0YVxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEobG9jYXRpb24pIHtcbiAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgJ2h0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JyArXG4gICAgICBsb2NhdGlvbiArXG4gICAgICAnJmFwcGlkPWIyNTU3N2NlYTc3NWY3NzJlNjgwMTI0OGRhZWMzNjE5JyxcbiAgICB7IG1vZGU6ICdjb3JzJyB9LFxuICApO1xuICBsZXQgcmVzcG9uc2VPYmogPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnNvbGUubG9nKHJlc3BvbnNlT2JqKTtcbn1cbmdldFdlYXRoZXJEYXRhKCdJbG9yaW4nKTtcbiJdLCJuYW1lcyI6WyJnZXRXZWF0aGVyRGF0YSIsImxvY2F0aW9uIiwiZmV0Y2giLCJtb2RlIiwicmVzcG9uc2UiLCJqc29uIiwicmVzcG9uc2VPYmoiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==