package ma.emsi.server.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.ArrayList;
import java.util.Collection;
/**
 * @author BarkouchMourad
 **/
@Data
@AllArgsConstructor
@Entity
public class Entreprise extends Compte{
    private String nom;
    private String secteur;
    private String address;
    @OneToMany
    private Collection<Membres> suiviPar;

    public Entreprise() {
        this.nom = "---";
        this.secteur = "---";
        this.address = "---";
        this.suiviPar = new ArrayList<>();
    }
}
