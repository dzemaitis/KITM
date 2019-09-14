using System;

namespace DOTNET
{
    class Program
    {
        static void Main(string[] args)
        {   
            bool status = true;

            Console.WriteLine("Calculator");

            while(status){

                string ui;
                string number1, number2;
                int num1, num2;


                Console.WriteLine("Enter first number:");
                number1 = Console.ReadLine();
                bool result = Int32.TryParse(number1, out num1);
                while(result == false){
                    Console.WriteLine("Wrong input. Please enter an number.");
                    number1 = Console.ReadLine();
                    result = Int32.TryParse(number1, out num1);
                }

                Console.WriteLine("Enter second number:");
                number2 = Console.ReadLine();
                result = Int32.TryParse(number2, out num2);
                while(result == false){
                    Console.WriteLine("Wrong input. Please enter an number.");
                    number2 = Console.ReadLine();
                    result = Int32.TryParse(number2, out num2);
                }

                Console.WriteLine("Enter symbol for operation: *, /, +, or -  ");
                ui = Console.ReadLine();

                while (ui != "*" && ui!= "/" && ui!= "+" && ui!= "-"){
                    Console.WriteLine("Wrong symbol. Please enter: *, /, + or -");
                    ui = Console.ReadLine();
                }
                if (ui == "*"){
                    Console.WriteLine(num1 + " " + ui + " " + num2 + " = " + (num1 * num2));
                    Console.WriteLine("Continue? Y/N");
                    string q = Console.ReadLine();
                    while (q != "n" && q != "N" && q != "Y" && q != "y"){
                        Console.WriteLine("Press y to continue or n to quit");
                        q = Console.ReadLine(); 
                    }
                    
                    if(q == "n" || q == "N"){
                        status = false;
                    }
                    else{
                        continue;
                    }
                }
                else if(ui == "/"){
                    if (num2 == 0){
                        Console.WriteLine("You can't divide by zero (" + num1 + " " + ui + " " +num2 + ")" );
                    }
                    else {
                        double numb1 = Convert.ToDouble(num1);
                        double numb2 = Convert.ToDouble(num2);
                        Console.WriteLine(numb1 + " " + ui + " " + numb2 + " = " + (numb1 / numb2));
                    }   Console.WriteLine("Continue? Y/N");
                    string q = Console.ReadLine();
                    while (q != "n" && q != "N" && q != "Y" && q != "y"){
                        Console.WriteLine("Press y to continue or n to quit");
                        q = Console.ReadLine(); 
                    }
                    
                    if(q == "n" || q == "N"){
                        status = false;
                    }
                    else{
                        continue;
                    }
                }
                else if (ui == "+"){
                    Console.WriteLine(num1 + " " + ui + " " + num2 + " = " + (num1 + num2));
                    Console.WriteLine("Continue? Y/N");
                    string q = Console.ReadLine();
                    while (q != "n" && q != "N" && q != "Y" && q != "y"){
                        Console.WriteLine("Press y to continue or n to quit");
                        q = Console.ReadLine(); 
                    }
                    
                    if(q == "n" || q == "N"){
                        status = false;
                    }
                    else{
                        continue;
                    }
                }
                else if (ui == "-"){
                    Console.WriteLine(num1 + " " + ui + " " + num2 + " = " + (num1 - num2));
                    Console.WriteLine("Continue? Y/N");
                    string q = Console.ReadLine();
                    while (q != "n" && q != "N" && q != "Y" && q != "y"){
                        Console.WriteLine("Press y to continue or n to quit");
                        q = Console.ReadLine(); 
                    }
                    
                    if(q == "n" || q == "N"){
                        status = false;
                    }
                    else{
                        continue;
                    }
                }
            }
        }
    }
}
