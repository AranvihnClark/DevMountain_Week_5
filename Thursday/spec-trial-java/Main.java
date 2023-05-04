import java.util.Scanner;

public class Main {

  public void practice() {
    // Here are some intro topics to give you a bit of experience with Java

    // Problem 1
    // Create an Integer variable named x and set it equal to 3
    // CODE HERE
    int x = 3;

    // Problem 2
    // Create a Double variable named y and set it equal to 1.1
    // CODE HERE
    double y = 1.1;
    // Problem 3
    // Create a String variable named name and set it equal to your first name
    // CODE HERE
    String name = "Aranvihn";

    // Problem 4
    // Create a Boolean variable named truth and set it equal to false
    // CODE HERE
    boolean truth = false;

    // Problem 5
    // Print "Hello World" to the console
    // CODE HERE
    System.out.println("Hello World");

    // Problem 6
    // Print "Hello, NAME FROM PROBLEM 3 USING VARIABLE name" to the console
    // CODE HERE
    System.out.println("Hello, " + name + ".");

    // Problem 7
    // Create a FOR loop that starts at 0, ends at x, and increments by 1
    // CODE HERE
    for (int i = 0; i == x; i++) {
      System.out.println(i);
    }

    // Problem 8
    // Create an IF ELSE statement, where if y is greater than 1 set truth equal to
    // true, else set it equal to false
    // CODE HERE
    if (y > 1)
      truth = true;
    else
      truth = false;

    // Problem 9
    // Create an array with 10 spots, assign each spot with a value from 0 to 9
    // corresponding to the correct spot
    // CODE HERE
    int[] array = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };

    // Problem 10
    // Print the array to the console in the correct order
    // CODE HERE
    for (int i = 0; i < array.length; i++) {
      System.out.println(array[i]);
    }

    // Problem 11
    // Create a nested for loop that check to make sure there are no duplicates in
    // the array
    // CODE HERE

    for (int i = 0; i < array.length; i++) {
      for (int j = i + 1; j < array.length; j++) {
        if (array[i] == array[j]) {
          System.out.println("There is a duplicate!!");
        }
      }
    }
    System.out.println("There are no duplicates.");

  }

  public void project() {
    // Create a new Scanner variable called input (must be lowercase)
    // CODE HERE
    Scanner input = new Scanner(System.in);

    while (true) {
      System.out.println("* Input Style: Operator Space Number Space Number Enter *");
      System.out.println("Enter your equation > ");
      String userInput = input.nextLine();

      String[] tokens = userInput.split(" ");

      if (tokens[0].equals("q")) {
        System.out.println("You will exit.");
        input.close();
        break;
      } else if (tokens.length < 2) {
        System.out.println("Not enough inputs.");
        continue;
      }

      // Create a String variable called operator, and set it equal to tokens[0]
      // CODE HERE
      String operator = tokens[0];

      // Create a String variable called num1, and set it equal to tokens[1]
      // CODE HERE
      String num1 = tokens[1];

      // Create a String variable called num2
      // CODE HERE
      String num2;

      // if tokens.length < 3, num2 equals 0 defined as a String ("0")
      // else, num2 equals tokens[2]
      // CODE HERE
      if (tokens.length < 3)
        num2 = "0";
      else
        num2 = tokens[2];

      float result = 0;

      float num1Float;
      float num2Float;

      try {
        // Set num1Float equal to Float.parseFloat(num1)
        // CODE HERE
        num1Float = Float.parseFloat(num1);

        // Set num2Float equal to Float.parseFloat(num2)
        // CODE HERE
        num2Float = Float.parseFloat(num2);

      } catch (NumberFormatException e) {
        System.out.println("Those aren't numbers!");
        continue;
      }

      if (operator.equals("+")) {
        result = Arithmetic.add(num1Float, num2Float);
      } else if (operator.equals("-")) {
        result = Arithmetic.subtract(num1Float, num2Float);
      } else if (operator.equals("*")) {
        result = Arithmetic.multiply(num1Float, num2Float);
      } else if (operator.equals("/")) {
        result = Arithmetic.divide(num1Float, num2Float);
      } else if (operator.equals("square")) {
        result = Arithmetic.square(num1Float);
      } else if (operator.equals("cube")) {
        result = Arithmetic.cube(num1Float);
      } else if (operator.equals("pow")) {
        result = Arithmetic.power(num1Float, num2Float);
      } else if (operator.equals("mod")) {
        result = Arithmetic.mod(num1Float, num2Float);
      } else {
        System.out.println("Please provide an operator and two numbers.");
        continue;
      }
      // Print result
      // CODE HERE
      System.out.println(result);

    }
  }

  public class Arithmetic {
    public static float add(float num1, float num2) {
      return num1 + num2;
    }

    public static float subtract(float num1, float num2) {
      return num1 - num2;
    }

    public static float multiply(float num1, float num2) {
      return num1 * num2;
    }

    public static float divide(float num1, float num2) {
      return num1 / num2;
    }

    public static float square(float num1) {
      return num1 * num1;
    }

    public static float cube(float num1) {
      return num1 * num1 * num1;
    }

    public static float power(float num1, float num2) {
      return (float) Math.pow(num1, num2);
    }

    public static float mod(float num1, float num2) {
      return num1 % num2;
    }
  }

  public static void main(String[] args) {
    Main assignment = new Main();
    assignment.practice();
    assignment.project();
  }
}
