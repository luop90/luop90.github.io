var corporate = angular.module('corporate-bingo', []);
var possibleSelections = [
  'Kiddos',
  '"the Work"',
  'Verticle Alignment',
  'Understandings',
  'Students first',
  'Delivery',
  'Formative',
  'Collaboration',
  'Share-out',
  'Think Pair Share',
  'Strand',
  'Best Practices',
  'Instruction',
  'Teachable Moment',
  'Growth',
  'Next Steps',
  'CLO',
  'Homework',
  'Integrity',
  'Levels',
  'IEP',
  'Groups',
  'Common Core',
  'Integrity',
  'LEAP',
  'Fun',
  'Data',
  'Proficiency',
  'Evidence',
  'Piece',
  'Direct teaching',
  'Student Centered',
  'Rigor',
  'Accommodations',
  'Differentiated Roles',
  'Ah-Ha moments',
  'Efficacy',
  'Scaffold',
  'Pairings',
  'Learnings',
  'Observation',
  'Next Steps',
  'Materials',
  'Indicator',
  'Content Language Objective',
  'PGP',
  'Equity',
  'Indicator',
  'Conversation',
  'Differentiation',
  'Rating',
  'Celebratinos',
  'Summative Assessment',
  'Pretest',
  'Instructional Moves',
  'Modeling',
  'Competency',
  'Intervention',
  'Justification',
  'Share Out',
  'Word wall',
  'Non-Probationary'
];

corporate.controller('MainCtrl', function ($scope) {
  $scope.toggleSelect = function ($parent, $child) {
    $scope.board[$parent][$child] = !$scope.board[$parent][$child];

    // Now we check if the game is done
    if (checkFirstDiagnol($scope) || checkSecondDiagnol($scope)) {
      runBingo();
    }

    for (var i = 0; i < $scope.board.length; i++) {
      if (entireRowIsTrue($scope.board[i]) || entireColumnIsTrue($scope, i)) {
        runBingo();
      }
    }
  };

  // Generate board
  $scope.bingo = []; // These are our values
  $scope.board = []; // These are whether the section is selected or not

  for (var i = 0; i < 5; i++) {
    var row = [];
    var row2 = [];

    for (var j = 0; j < 5; j++) {
      row.push(fetchPhrase());
      row2.push(false);
    }

    $scope.bingo.push(row);
    $scope.board.push(row2);
  }

  $scope.loadedBoard = true;

  // Initialize our modal
  $('.modal').modal();
});

function fetchPhrase() {
  var random = Math.floor(Math.random() * possibleSelections.length);
  var result = possibleSelections[random];

  possibleSelections.splice(random, 1);
  return result;
}

function entireRowIsTrue(row) {
  for (var i = 0; i < row.length; i++) {
    if (!row[i]) {
      return false;
    }
  }

  return true;
}

function entireColumnIsTrue($scope, column) {
  for (var i = 0; i < $scope.board.length; i++) {
    if (!$scope.board[i][column]) {
      return false;
    }
  }

  return true;
}

function checkFirstDiagnol($scope) {
  for (var i = 0; i < $scope.board.length; i++) {
    if (!$scope.board[i][i]) {
      return false;
    }
  }

  return true;
}

function checkSecondDiagnol($scope) {
  for (var i = 0; i < $scope.board.length; i++) {
    if (!$scope.board[i][$scope.board.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

function runBingo() {
  alert('BINGO!');
}
