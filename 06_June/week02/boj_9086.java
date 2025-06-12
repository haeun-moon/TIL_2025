import java.io.*;

public class boj_9086 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int T = Integer.parseInt(br.readLine());

        for (int tc = 1; tc <= T; tc++) {
            String s = br.readLine();
            bw.write(String.valueOf(s.charAt(0)) + String.valueOf(s.charAt(s.length() - 1)) + "\n");
        }

        bw.flush();
        bw.close();
    }
}
