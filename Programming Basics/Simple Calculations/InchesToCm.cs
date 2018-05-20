using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication2
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("inches =");
            var inches = double.Parse(Console.ReadLine());
            var centimetres = inches * 2.54;
            Console.Write("Centimetres =");
            Console.WriteLine(centimetres);


        }
    }
}