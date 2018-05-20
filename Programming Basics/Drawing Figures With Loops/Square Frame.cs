using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Square_Frame
{
    class Program
    {
        static void Main(string[] args)
        {
            var n = int.Parse(Console.ReadLine());
            string row = "+";
            var innerLine = "|";
            Console.Write(row + " ");
            for (int i = 0; i <  n - 2; i++)
            {
                Console.Write("- ");
            }
            Console.WriteLine(row);

            for (int i = 0; i < n - 2; i++)
            {
                Console.Write(innerLine + " ");
                for (int j = 0; j < n - 2 ; j++)
                {
                    Console.Write("- ");
                }
                Console.Write(innerLine);
                Console.WriteLine();
            }


            Console.Write(row + " ");
            for (int i = 0; i < n - 2; i++)
            {
                Console.Write("- ");
            }
            Console.WriteLine(row);
        }
    }
}