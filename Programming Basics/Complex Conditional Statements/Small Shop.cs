using System;

public class Program
{
	public static void Main()
	{
		string product = Console.ReadLine();
		string city = Console.ReadLine();
		double quantity = double.Parse(Console.ReadLine());
		if (product == "coffee" && city == "Sofia")
		{
			Console.WriteLine(quantity * 0.50);
		}
		else
		{
			if (product == "water" && city == "Sofia")
			{
				Console.WriteLine(quantity * 0.80);
			}
			else
			{
				if (product == "beer" && city == "Sofia")
				{
					Console.WriteLine(quantity * 1.20);
				}
				else
				{
					if (product == "peanuts" && city == "Sofia")
					{
						Console.WriteLine(quantity * 1.50);
					}

					if (product == "coffee" && city == "Plovdiv")
					{
						Console.WriteLine(quantity * 0.40);
					}
					else
					{
						if (product == "water" && city == "Plovdiv")
						{
							Console.WriteLine(quantity * 0.70);
						}
						else
						{
							if (product == "beer" && city == "Plovdiv")
							{
								Console.WriteLine(quantity * 1.15);
							}
							else
							{
								if (product == "sweets" && city == "Plovdiv")
								{
									Console.WriteLine(quantity * 1.30);
								}
								else
								{
									if (product == "peanuts" && city == "Plovdiv")
									{
										Console.WriteLine(quantity * 1.50);
									}

									if (product == "coffee" && city == "Varna")
									{
										Console.WriteLine(quantity * 0.45);
									}
									else
									{
										if (product == "water" && city == "Varna")
										{
											Console.WriteLine(quantity * 0.70);
										}
										else
										{
											if (product == "beer" && city == "Varna")
											{
												Console.WriteLine(quantity * 1.10);
											}
											else
											{
												if (product == "sweets" && city == "Varna")
												{
													Console.WriteLine(quantity * 1.35);
												}
												else
												{
													if (product == "peanuts" && city == "Varna")
													{
														Console.WriteLine(quantity * 1.55);
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}