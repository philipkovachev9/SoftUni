using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace SoloLearn
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            for (var i = 1; i <= n; i++)
            {
               Console.Write("$");
               for (var rol = 2; rol <= i; rol++)
               {
                  Console.Write(" $");

               }
               Console.WriteLine();
            }

        }
    }
}
