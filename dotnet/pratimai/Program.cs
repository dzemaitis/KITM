using System;

namespace pratimai
{
    class Program
    {
        static void Main(string[] args)
        {   
            int a;
            a = Int32.Parse(Console.ReadLine());
            int b;
            b = Int32.Parse(Console.ReadLine());
            int temp;
            temp = a;
            a = b;
            b = temp;
            Console.WriteLine(b,a);
        }
    }
}
