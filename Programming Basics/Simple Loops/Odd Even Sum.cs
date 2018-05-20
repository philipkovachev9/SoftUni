using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _8_Odd_Even_Sum
{
    class Program
    {
        static void Main(string[] args)
        {
            int count = int.Parse(Console.ReadLine());
            var evenSum = 0;
            var oddSum = 0;

            for (int i = 1; i <= count; i++)
            {
                var num = int.Parse(Console.ReadLine());
                if (i % 2 != 0)
                { evenSum += num; }
                else
                { oddSum += num; }
            }
            if ((Math.Abs(evenSum - oddSum)) == 0)
                Console.WriteLine("Yes, sum = " + evenSum);
            else
                Console.WriteLine("No diff = " + Math.Abs(evenSum - oddSum));
        }
    }
}