import java.util.Scanner;

public class boj_25314 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int N = sc.nextInt();

        String l = "long ";

        System.out.println(l.repeat(N / 4) + "int");
    }
}
